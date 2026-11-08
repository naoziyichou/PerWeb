/* MediaPipe is loaded only after the visitor explicitly enables the camera. */
const video=document.getElementById('webcam');
const overlay=document.getElementById('hand-overlay'), ctx=overlay.getContext('2d');
const button=document.getElementById('camera-button');
const status=document.getElementById('camera-status'),dot=document.getElementById('camera-dot');
const help=document.getElementById('camera-help'),placeholder=document.getElementById('camera-placeholder');
let model=null, stream=null, running=false, starting=false, generation=0, frameId=0;
let lastVideoTime=-1,lastInference=0,lastSeen=0,tracking=false,pinching=false,pinchFrames=0;
let filtered=null,needsRelease=true,failureCount=0;
const CONNECTIONS=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]];
const distance=(a,b)=>Math.hypot((a.x-b.x)*video.videoWidth,(a.y-b.y)*video.videoHeight);
const timeout=(promise,ms,message)=>new Promise((resolve,reject)=>{
  const timer=setTimeout(()=>reject(new Error(message)),ms);
  Promise.resolve(promise).then(v=>{clearTimeout(timer);resolve(v);},e=>{clearTimeout(timer);reject(e);});
});

window.handInput={
  get tracking(){return tracking;},
  get needsRelease(){return needsRelease;},
  requireRelease(){needsRelease=true;pinching=false;pinchFrames=0;},
  stop
};
function setStatus(text,mode=''){status.textContent=text;dot.className='status-dot '+mode;}
function release(){
  window.landscape?.releaseHand?.();pinching=false;pinchFrames=0;tracking=false;filtered=null;needsRelease=true;
  ctx.clearRect(0,0,overlay.width,overlay.height);
}
function stop(){
  generation++;running=false;starting=false;
  cancelAnimationFrame(frameId);
  if(stream)stream.getTracks().forEach(track=>track.stop());
  stream=null;video.srcObject=null;release();
  document.body.classList.remove('camera-live');
  placeholder.hidden=false;placeholder.style.display='';
  setStatus('摄像头已关闭');
  button.disabled=false;button.innerHTML='开启手势塑形 <span>↗</span>';
  help.textContent='可继续用鼠标塑形，或重新开启摄像头。';
}
async function loadModel(){
  if(model)return;
  // Pinned SDK and model are bundled locally; no CDN is needed during the experience.
  const {FilesetResolver,HandLandmarker}=await import('./vendor/mediapipe/vision_bundle.mjs');
  const files=await FilesetResolver.forVisionTasks('./vendor/mediapipe/wasm');
  const options={baseOptions:{modelAssetPath:'./models/hand_landmarker.task',delegate:'GPU'},runningMode:'VIDEO',numHands:1,minHandDetectionConfidence:.55,minHandPresenceConfidence:.55,minTrackingConfidence:.55};
  try{model=await HandLandmarker.createFromOptions(files,options);}
  catch(error){
    console.info('GPU hand tracking unavailable; trying CPU.',error);
    options.baseOptions.delegate='CPU';
    model=await HandLandmarker.createFromOptions(files,options);
  }
}
async function start(){
  if(running||starting){stop();return;}
  if(!window.isSecureContext || !navigator.mediaDevices?.getUserMedia){
    setStatus('需要本地预览或 HTTPS');
    help.textContent='请用文件夹中的“启动预览.cmd”打开作品；上线时使用 HTTPS。当前可用鼠标塑形。';return;
  }
  if(!window.landscape?.ready){help.textContent='山水正在准备，请稍后重试。';return;}
  const token=++generation;
  starting=true;button.innerHTML='取消开启 <span>×</span>';
  setStatus('等待摄像头授权','loading');
  help.textContent='请在浏览器提示中允许摄像头，然后张开一只手。';
  try{
    // If a permission prompt outlives cancellation, close the late stream immediately.
    const cameraPromise=navigator.mediaDevices.getUserMedia({video:{width:{ideal:640},height:{ideal:480},facingMode:'user'},audio:false}).then(s=>{
      if(token!==generation){s.getTracks().forEach(t=>t.stop());throw new Error('cancelled');}
      return s;
    });
    stream=await timeout(cameraPromise,45000,'摄像头授权等待超时，请重试并允许访问。');
    if(token!==generation)return;
    video.srcObject=stream;
    await timeout(video.play(),12000,'摄像头未能开始播放，请关闭其他占用摄像头的程序。');
    if(token!==generation)return;
    resizeOverlay();
    document.body.classList.add('camera-live');
    placeholder.style.display='none';
    setStatus('正在准备手势识别','loading');
    help.textContent='首次开启需要几秒钟。将整只手放在预览框内，保持光线充足。';
    await timeout(loadModel(),60000,'手势模型加载超时，请刷新页面重试。');
    if(token!==generation)return;
    starting=false;running=true;needsRelease=true;lastSeen=performance.now();lastVideoTime=-1;failureCount=0;
    setStatus('张开手，开始定位','active');
    button.innerHTML='关闭摄像头 <span>×</span>';
    help.textContent='背景中的圆圈是捏合点。将它移到山水上，再捏住上下移动；连线指向已抓住的地形。';
    stream.getVideoTracks()[0].addEventListener('ended',()=>{if(running){stop();setStatus('摄像头连接已中断');}});
    frameId=requestAnimationFrame(tick);
  }catch(error){
    if(token!==generation)return;
    stop();
    setStatus('手势暂时无法开启');
    const messages={NotAllowedError:'摄像头权限未开启。可在地址栏的相机设置中允许后重试。',NotFoundError:'没有找到摄像头，可先用鼠标体验塑形。',NotReadableError:'摄像头可能被其他程序占用，请关闭后重试。'};
    help.textContent=messages[error.name]||error.message||'请重新开启摄像头，或先用鼠标体验。';
    console.warn('Hand input:',error);
  }
}
function tick(now){
  if(!running)return;
  if(tracking && now-lastSeen>600){release();setStatus('等待手进入画面','active');}
  if(!document.hidden && video.readyState>=2 && video.currentTime!==lastVideoTime && now-lastInference>=45){
    lastInference=now;lastVideoTime=video.currentTime;
    try{
      const result=model.detectForVideo(video,now);
      failureCount=0;
      if(result.landmarks?.length){lastSeen=now;processLandmarks(result.landmarks[0]);}
      else{
        // Losing the hand commits the current edit. Re-entering with pinched fingers cannot grab again.
        if(tracking)release();
        if(now-lastSeen>400){setStatus('等待手进入画面','active');setGesture('张开手，将整只手放入镜头','—');}
      }
    }catch(error){
      console.warn('Hand frame:',error);
      release();failureCount++;
      if(failureCount>=3){stop();setStatus('手势识别已暂停');help.textContent='识别遇到问题，可重新开启摄像头，或用鼠标继续塑形。';return;}
    }
  }
  frameId=requestAnimationFrame(tick);
}
function setGesture(text,meter){document.getElementById('gesture-label').textContent=text;document.getElementById('gesture-meter').textContent=meter;}
function processLandmarks(landmarks){
  // Palm-normalized pinch distance is insensitive to how far the hand is from the camera.
  const scale=Math.max(distance(landmarks[5],landmarks[17]),distance(landmarks[0],landmarks[9]),8);
  const ratio=distance(landmarks[4],landmarks[8])/scale;
  if(ratio>.52){pinching=false;pinchFrames=0;needsRelease=false;}
  else if(!needsRelease && ratio<.32){pinchFrames++;if(pinchFrames>=2)pinching=true;}
  else if(!pinching)pinchFrames=0;

  // Pick under the actual pinch midpoint. Use palm displacement for sculpting so
  // closing the fingers alone cannot lift the ground. Both use the video display transform.
  const indices=[0,5,9,13,17];
  const center=indices.reduce((p,i)=>({x:p.x+landmarks[i].x/5,y:p.y+landmarks[i].y/5}),{x:0,y:0});
  const palm=screenPoint(center);
  const pinch=screenPoint({x:(landmarks[4].x+landmarks[8].x)/2,y:(landmarks[4].y+landmarks[8].y)/2});
  const mapped={x:pinch.x/innerWidth,y:pinch.y/innerHeight,dragY:palm.y/innerHeight};
  if(!filtered)filtered=mapped;
  else{filtered={x:mapped.x,y:mapped.y,dragY:filtered.dragY+(mapped.dragY-filtered.dragY)*.45};}
  tracking=true;
  setStatus(pinching?'捏合中 · 上下塑形':'已识别到手','active');
  window.landscape?.hand?.({...filtered,pinching});
  drawHand(landmarks,pinching,pinch);
  if(needsRelease)setGesture('先张开手，再捏合抓取','OPEN');
}
function screenPoint(p){return CameraSpace.point(p,video.videoWidth||640,video.videoHeight||480,innerWidth,innerHeight);}
function resizeOverlay(){overlay.width=innerWidth;overlay.height=innerHeight;}
function drawHand(points,active,pinch){
  const w=overlay.width,h=overlay.height;
  ctx.clearRect(0,0,w,h);
  ctx.strokeStyle=active?'#f0d69b':'#c2dbc4';ctx.lineWidth=1.4;
  ctx.beginPath();
  for(const[a,b]of CONNECTIONS){const p=screenPoint(points[a]),q=screenPoint(points[b]);ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);}
  ctx.stroke();
  ctx.fillStyle=active?'#f0d69b':'#d0e7d4';
  for(const landmark of points){const p=screenPoint(landmark);ctx.beginPath();ctx.arc(p.x,p.y,2.3,0,Math.PI*2);ctx.fill();}
  ctx.lineWidth=1.7;ctx.beginPath();ctx.arc(pinch.x,pinch.y,active?10:14,0,Math.PI*2);ctx.stroke();
  ctx.font='12px "Microsoft YaHei UI",sans-serif';ctx.fillText(active?'已抓住':'捏合点',pinch.x+20,pinch.y-12);
  const app=window.landscape,anchor=app?.activeStroke?.source==='hand'?app.activeStroke.anchor:app?.hover;
  if(anchor&&app?.cameraBasis){
    const terrain=app.terrain;
    const target=app.project(anchor.gx*terrain.cell-terrain.extent,-Math.max(app.waterLevel,terrain.sample(anchor.gx,anchor.gz))*terrain.heightScale-5,anchor.gz*terrain.cell-terrain.extent);
    ctx.strokeStyle=active?'#f0d69bbf':'#c2dbc470';ctx.setLineDash(active?[]:[3,5]);
    ctx.beginPath();ctx.moveTo(pinch.x,pinch.y);ctx.lineTo(target.x,target.y);ctx.stroke();ctx.setLineDash([]);
    ctx.beginPath();ctx.arc(target.x,target.y,5,0,Math.PI*2);ctx.stroke();
    if(active)ctx.fillText('塑形位置',target.x+11,target.y+18);
  }
}
resizeOverlay();
window.addEventListener('resize',()=>{release();resizeOverlay();});
button.addEventListener('click',start);
document.addEventListener('visibilitychange',()=>{if(document.hidden)release();});
window.addEventListener('blur',release);
window.addEventListener('pagehide',stop);
