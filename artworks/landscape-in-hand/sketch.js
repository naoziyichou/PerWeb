/* Landscape in Hand — NetArt 02. A development of the original Autumn cry p5 sketch. */
'use strict';
const GRID = 96, CELL = 7.4, H_SCALE = 280;
const INITIAL_VIEW = { angle: .38, elevation: -.78, distance: 1120 };
let terrain, sceneCanvas, waterLevel = .29, brushRadius = 13;
let contours = [], waterPoints = [], rivers = [], stars = [];
let contourRevision = -1, lastContourBuild = -Infinity;
let view = { ...INITIAL_VIEW }, cameraBasis;
let hover = null, strokeInput = null, orbit = null, toastTimer;
let lastWater = waterLevel, sceneReady = false;

function setup() {
  try {
    sceneCanvas = createCanvas(windowWidth, windowHeight, WEBGL);
    // p5 2.3.4 already preserves its WebGL buffer. Changing attributes here
    // replaces the renderer/canvas and would detach our pointer listeners.
    sceneCanvas.parent('landscape');
    pixelDensity(Math.min(window.devicePixelRatio || 1, 1.5));
    noiseSeed(3193); randomSeed(3193); noiseDetail(5, .55);
    terrain = new ClayTerrain(GRID, CELL, H_SCALE, noise);
    for (let i = 0; i < 7600; i++) waterPoints.push([random(0, GRID - 1), random(0, GRID - 1), random(TWO_PI)]);
    for (let i = 0; i < 130; i++) stars.push([random(-630, 630), random(-90, 10), random(-600, 600), random(1)]);
    for (let i = 0; i < 52; i++) rivers.push(new Flow());
    wireControls(); wirePointer();
    buildContours();
    updateCamera();
    sceneReady = true;
    // Public input boundary shared by MediaPipe and the mouse fallback.
    window.landscape = {
      hand: handleHand,
      releaseHand: () => { if (strokeInput?.source === 'hand') finishStroke(); if (!strokeInput) hover = null; },
      undo: undoSculpt, reset: resetSculpt,
      get ready() { return sceneReady; },
      get terrain() { return terrain; },
      get hover() { return hover; },
      get activeStroke() { return strokeInput; },
      get cameraBasis() { return cameraBasis; },
      pick: pickTerrain,
      project: projectWorld,
      beginStroke, moveStroke, finishStroke,
      get waterLevel() { return waterLevel; }
    };
  } catch (error) {
    const box = document.getElementById('boot-error');
    box.hidden = false;
    box.textContent = '山水暂时无法绘制。请使用支持 WebGL 的新版 Edge 或 Chrome，并开启浏览器图形加速。' + error.message;
    throw error;
  }
}

function gxToWorld(x) { return x * CELL - terrain.extent; }
function vecAdd(a,b) { return a.map((v,i) => v+b[i]); }
function vecScale(a,s) { return a.map(v => v*s); }
function vecDot(a,b) { return a.reduce((v,n,i) => v+n*b[i],0); }
function vecCross(a,b) { return [a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]]; }
function vecUnit(a) { return vecScale(a,1/Math.hypot(...a)); }

function updateCamera() {
  const distance = view.distance * (width < 760 ? 1.6 : 1);
  const origin = [Math.cos(view.elevation)*Math.sin(view.angle)*distance, Math.sin(view.elevation)*distance, Math.cos(view.elevation)*Math.cos(view.angle)*distance];
  const target = [0,-85,0], forward = vecUnit(target.map((v,i) => v-origin[i]));
  const right = vecUnit(vecCross(forward,[0,1,0])), down = vecUnit(vecCross(right,forward));
  cameraBasis = { origin, forward, right, down, tangent: Math.tan(Math.PI/6), aspect: width/height };
  perspective(Math.PI/3,width/height,10,5000);
  camera(...origin,...target,0,1,0);
}

function projectWorld(x,y,z) {
  const c = cameraBasis, v = [x-c.origin[0],y-c.origin[1],z-c.origin[2]], depth = vecDot(v,c.forward);
  return { x:(vecDot(v,c.right)/(depth*c.tangent*c.aspect)+1)*width/2, y:(vecDot(v,c.down)/(depth*c.tangent)+1)*height/2, depth };
}

// Raycast against the actual modified height field (or water where it covers it).
function pickTerrain(screenX,screenY) {
  if (!cameraBasis) return null;
  const c = cameraBasis;
  const direction = vecUnit(vecAdd(c.forward,vecAdd(vecScale(c.right,(screenX/width*2-1)*c.tangent*c.aspect),vecScale(c.down,(screenY/height*2-1)*c.tangent))));
  const bounds = [[-terrain.extent,terrain.extent],[-1.5*H_SCALE,H_SCALE*.14],[-terrain.extent,terrain.extent]];
  let near = 0, far = 5000;
  for (let i=0;i<3;i++) {
    if (Math.abs(direction[i])<1e-8) { if (c.origin[i]<bounds[i][0] || c.origin[i]>bounds[i][1]) return null; }
    else {
      const a=(bounds[i][0]-c.origin[i])/direction[i], b=(bounds[i][1]-c.origin[i])/direction[i];
      near=Math.max(near,Math.min(a,b)); far=Math.min(far,Math.max(a,b));
    }
  }
  if (far<near) return null;
  const difference = t => {
    const p=vecAdd(c.origin,vecScale(direction,t));
    return p[1]+Math.max(waterLevel,terrain.sampleWorld(p[0],p[2]))*H_SCALE;
  };
  let previous=near, previousDiff=difference(near);
  if (previousDiff>1) return null;
  for (let i=1;i<=150;i++) {
    const t=near+(far-near)*i/150, d=difference(t);
    if (d>=0 && previousDiff<=0) {
      let lo=previous, hi=t;
      for (let j=0;j<9;j++) { const mid=(lo+hi)/2; if (difference(mid)>0) hi=mid; else lo=mid; }
      const p=vecAdd(c.origin,vecScale(direction,(lo+hi)/2));
      return { gx:(p[0]+terrain.extent)/CELL, gz:(p[2]+terrain.extent)/CELL };
    }
    previous=t; previousDiff=d;
  }
  return null;
}

function beginStroke(source,point,inputY) {
  if (strokeInput || !point || !terrain.beginStroke(point.gx,point.gz,brushRadius)) return false;
  strokeInput={source,anchor:{...point},startY:inputY,filteredY:inputY,offset:0};
  hover={...point};
  return true;
}
function moveStroke(inputY) {
  if (!strokeInput) return;
  // Follow the vertical displacement from the grab, never frame-dependent accumulation.
  strokeInput.filteredY=lerp(strokeInput.filteredY,inputY,.42);
  let offset=(strokeInput.startY-strokeInput.filteredY)*2.8;
  if (Math.abs(offset)<.007) offset=0;
  strokeInput.offset=offset;
  terrain.updateStroke(offset);
  updateGesture(offset>.008?'正在拉起山峰':offset<-.008?'正在压低山谷':'已抓住 · 上下移动塑形',`${offset>=0?'+':''}${Math.round(offset*H_SCALE)}`);
}
function finishStroke() {
  if (!strokeInput) return;
  const changed=terrain.endStroke();
  strokeInput=null;
  updateGesture(changed?'已留下 · 可以继续塑形':'已松开 · 移动到下一个位置','READY');
  if (changed) {
    restartFlows();
    announce('这一次塑形已留下');
  }
  updateStats();
}
function handleHand({x,y,pinching,dragY=y}) {
  if (orbit || strokeInput?.source==='mouse') return;
  if (strokeInput?.source==='hand') {
    if (pinching) moveStroke(dragY); else finishStroke();
  } else {
    hover=pickTerrain(x*width,y*height);
    if (pinching && !window.handInput?.needsRelease) {
      if (beginStroke('hand',hover,dragY)) updateGesture('已抓住 · 上下移动塑形','PINCH');
      else updateGesture('把光点移到山水上，再捏合','—');
    } else if (!pinching) updateGesture(hover?'捏合拇指与食指，抓住这里':'移动手掌，让光点落在山水上','READY');
  }
}
function updateGesture(text,meter='—') {
  document.getElementById('gesture-label').textContent=text;
  document.getElementById('gesture-meter').textContent=meter;
}
function updateStats() {
  document.getElementById('undo-button').disabled=terrain.history.length===0;
  document.getElementById('edit-count').textContent=String(terrain.interventions).padStart(2,'0')+' INTERVENTIONS';
}
function announce(text) {
  const toast=document.getElementById('toast');
  toast.textContent=text; toast.classList.add('visible');
  clearTimeout(toastTimer); toastTimer=setTimeout(()=>toast.classList.remove('visible'),2100);
}
function restartFlows() { for (const flow of rivers) flow.reset(); }
function interruptGesture() {
  finishStroke(); hover=null;
  window.handInput?.requireRelease();
}
function undoSculpt() {
  interruptGesture();
  if (terrain.undo()) { restartFlows(); updateStats(); announce('已撤销上一次变化'); }
}
function resetSculpt() {
  interruptGesture();
  if (terrain.reset()) { restartFlows(); updateStats(); announce('山水已归初 · 可以撤销'); }
}
function wireControls() {
  const brush=document.getElementById('brush'),water=document.getElementById('water');
  brush.addEventListener('input',()=>{
    brushRadius=Number(brush.value);
    document.getElementById('brush-value').textContent=brushRadius<10?'细腻':brushRadius>17?'宽阔':'适中';
  });
  water.addEventListener('input',()=>{
    waterLevel=Number(water.value)/100;
    document.getElementById('water-value').textContent=water.value+'%';
    restartFlows();
  });
  document.getElementById('undo-button').addEventListener('click',undoSculpt);
  document.getElementById('reset-button').addEventListener('click',resetSculpt);
  document.getElementById('view-button').addEventListener('click',()=>{
    interruptGesture(); view={...INITIAL_VIEW}; announce('已回到初始视角');
  });
  document.getElementById('capture-button').addEventListener('click',()=>{
    // Render once before export so WebGL canvases also export reliably after compositing.
    redraw(); saveCanvas('Landscape-in-Hand-'+new Date().toISOString().slice(0,10),'png');
    announce('已保存山水图片');
  });
  document.getElementById('camera-opacity').addEventListener('input',event=>{
    const value=Number(event.target.value);
    document.documentElement.style.setProperty('--camera-opacity',value/100);
    document.getElementById('camera-opacity-value').textContent=value+'%';
  });
  window.addEventListener('keydown',event=>{
    if ((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='z') { event.preventDefault(); undoSculpt(); }
    if (event.key==='Escape') { interruptGesture(); updateGesture('已松开 · 修改已保留'); }
  });
  window.addEventListener('blur',interruptGesture);
  document.addEventListener('visibilitychange',()=>{ if (document.hidden) interruptGesture(); });
}
function wirePointer() {
  const canvas=sceneCanvas.elt;
  const point=event=>{const r=canvas.getBoundingClientRect();return{x:event.clientX-r.left,y:event.clientY-r.top};};
  canvas.addEventListener('contextmenu',e=>e.preventDefault());
  canvas.addEventListener('pointerdown',event=>{
    if (event.button!==0 && event.button!==2) return;
    event.preventDefault();
    if (strokeInput?.source==='hand') { interruptGesture(); }
    const p=point(event);
    canvas.setPointerCapture(event.pointerId);
    if (event.button===2) { orbit={x:p.x,y:p.y}; hover=null; }
    else {
      hover=pickTerrain(p.x,p.y);
      if (!beginStroke('mouse',hover,p.y/height)) announce('先在山水上选择一个位置');
    }
  });
  canvas.addEventListener('pointermove',event=>{
    const p=point(event);
    if (orbit) {
      view.angle-=(p.x-orbit.x)*.006;
      view.elevation=constrain(view.elevation-(p.y-orbit.y)*.004,-1.4,-.27);
      orbit={x:p.x,y:p.y};
    } else if (strokeInput?.source==='mouse') moveStroke(p.y/height);
    else if (!window.handInput?.tracking) hover=pickTerrain(p.x,p.y);
  });
  const up=()=>{ if (strokeInput?.source==='mouse') finishStroke(); orbit=null; };
  canvas.addEventListener('pointerup',up);
  canvas.addEventListener('pointercancel',up);
  canvas.addEventListener('lostpointercapture',up);
  canvas.addEventListener('pointerleave',()=>{if (!strokeInput && !window.handInput?.tracking) hover=null;});
  canvas.addEventListener('wheel',event=>{
    event.preventDefault();
    if (strokeInput) return;
    view.distance=constrain(view.distance+event.deltaY*.6,760,1650);
    hover=null;
  },{passive:false});
}

function buildContours() {
  contours=[];
  const hs=terrain.heights, n=GRID;
  let highest=0; for (const h of hs) highest=Math.max(highest,h);
  for (let level=.035;level<highest;level+=.031) {
    if (level<waterLevel+.008) continue;
    const points=[];
    for (let z=0;z<n-1;z++) for (let x=0;x<n-1;x++) {
      const a=hs[z*n+x], b=hs[z*n+x+1], c=hs[(z+1)*n+x+1], d=hs[(z+1)*n+x], p=[];
      if ((a-level)*(b-level)<0) p.push([x+(level-a)/(b-a),z]);
      if ((b-level)*(c-level)<0) p.push([x+1,z+(level-b)/(c-b)]);
      if ((c-level)*(d-level)<0) p.push([x+1-(level-c)/(d-c),z+1]);
      if ((d-level)*(a-level)<0) p.push([x,z+1-(level-d)/(a-d)]);
      for (let j=0;j+1<p.length;j+=2) {
        const u=p[j],v=p[j+1], count=Math.max(1,Math.ceil(Math.hypot(v[0]-u[0],v[1]-u[1])*1.6));
        for (let k=0;k<count;k++) {const t=(k+.5)/count;points.push([u[0]+(v[0]-u[0])*t,u[1]+(v[1]-u[1])*t]);}
      }
    }
    contours.push({level,points});
  }
  contourRevision=terrain.revision;
  lastWater=waterLevel;
  lastContourBuild=millis();
}

class Flow {
  constructor(){this.reset();}
  reset() {
    this.x=random(12,GRID-12);this.z=random(12,GRID-12);
    for (let i=0;i<65;i++) {
      const x=random(7,GRID-7),z=random(7,GRID-7);
      if (terrain.sample(x,z)>waterLevel+.13){this.x=x;this.z=z;break;}
    }
    this.trail=[];this.life=0;this.still=0;
  }
  step(dt) {
    if (terrain.sample(this.x,this.z)<=waterLevel+.006 || this.life>700 || this.still>25) {this.reset();return;}
    const next=terrain.downhill(this.x,this.z,.42*dt);
    this.x=next.x;this.z=next.z;this.life+=dt;
    this.still=next.stopped?this.still+dt:0;
    if (!next.stopped) this.trail.push([this.x,this.z]);
    if (this.trail.length>80) this.trail.shift();
  }
}

function draw() {
  if (!terrain) return;
  clear();
  updateCamera();
  const dt=constrain(deltaTime/16.667,.25,2), time=millis()*.001;
  if ((contourRevision!==terrain.revision || lastWater!==waterLevel) && millis()-lastContourBuild>75) buildContours();

  // Quiet particles mark the extent of the landscape without hiding its contours.
  stroke(125,163,166,37);strokeWeight(1);
  beginShape(POINTS);
  for (const s of stars) vertex(s[0],22+Math.sin(time*.15+s[3]*6)*3,s[2]);
  endShape();

  const wy=-waterLevel*H_SCALE;
  stroke(76,166,198,115);strokeWeight(1.7);
  beginShape(POINTS);
  for (const p of waterPoints) {
    if (terrain.sample(p[0],p[1])>=waterLevel) continue;
    const wave=Math.sin(time*1.1+p[0]*.2+p[1]*.16)*1.3;
    vertex(gxToWorld(p[0]),wy+wave,gxToWorld(p[1]));
  }
  endShape();

  for (const layer of contours) {
    const t=constrain((layer.level-waterLevel)/(.95-waterLevel),0,1);
    stroke(lerp(113,236,t*t),lerp(185,216,t),lerp(189,157,t*t),185);
    strokeWeight(1.55);
    beginShape(POINTS);
    for (const p of layer.points) {
      // Sample live heights even while the contour cache catches up to the new shape.
      const h=terrain.sample(p[0],p[1]);
      if (h>waterLevel+.005) vertex(gxToWorld(p[0]),-h*H_SCALE,gxToWorld(p[1]));
    }
    endShape();
  }

  // Low-opacity grain preserves readable mass in gaps between the contours.
  stroke(159,195,165,32);strokeWeight(1);
  beginShape(POINTS);
  for(let z=2;z<GRID-2;z+=2)for(let x=2;x<GRID-2;x+=2){const h=terrain.heights[z*GRID+x];if(h>waterLevel)vertex(gxToWorld(x),-h*H_SCALE+.8,gxToWorld(z));}
  endShape();

  stroke(136,211,235,155);strokeWeight(1.8);
  beginShape(POINTS);
  for (const flow of rivers) {
    flow.step(dt);
    for (const p of flow.trail) {
      const h=terrain.sample(p[0],p[1]);
      if(h>waterLevel)vertex(gxToWorld(p[0]),-h*H_SCALE-1.8,gxToWorld(p[1]));
    }
  }
  endShape();
  drawBrush(time);
}

function drawBrush(time) {
  const p=strokeInput?.anchor||hover;
  if(!p||orbit)return;
  const radius=terrain.stroke?.radius||brushRadius;
  const active=!!strokeInput;
  stroke(active?243:200,active?218:224,active?154:201,active?225:165);strokeWeight(active?1.7:1.1);noFill();
  beginShape(LINES);
  for(let i=0;i<96;i++) {
    if(!active&&i%3===0)continue;
    for(const a of [i/96*TWO_PI,(i+1)/96*TWO_PI]) {
      const x=p.gx+Math.cos(a)*radius,z=p.gz+Math.sin(a)*radius;
      if(x<0||z<0||x>GRID-1||z>GRID-1){vertex(gxToWorld(constrain(x,0,GRID-1)),-Math.max(waterLevel,terrain.sample(x,z))*H_SCALE-4,gxToWorld(constrain(z,0,GRID-1)));}
      else vertex(gxToWorld(x),-Math.max(waterLevel,terrain.sample(x,z))*H_SCALE-4,gxToWorld(z));
    }
  }
  endShape();
  const x=gxToWorld(p.gx),z=gxToWorld(p.gz),y=-Math.max(waterLevel,terrain.sample(p.gx,p.gz))*H_SCALE-5;
  strokeWeight(6+Math.sin(time*3)*.7);point(x,y,z);
  strokeWeight(1);stroke(223,226,184,100);
  line(x,y-22,z,x,y-6,z);
  if(active){stroke(240,212,158,75);line(x,y,z,x,-waterLevel*H_SCALE,z);}
}

function windowResized() {
  if (!sceneReady) return;
  interruptGesture(); resizeCanvas(windowWidth,windowHeight); updateCamera();
}
