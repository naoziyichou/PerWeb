/* Match landmark coordinates to the same mirrored, object-fit:contain video as the background. */
(function(root){
  'use strict';
  function frame(videoWidth,videoHeight,width,height){
    const scale=Math.min(width/videoWidth,height/videoHeight);
    const w=videoWidth*scale,h=videoHeight*scale;
    return{left:(width-w)/2,top:(height-h)/2,width:w,height:h};
  }
  function point(landmark,videoWidth,videoHeight,width,height){
    const r=frame(videoWidth,videoHeight,width,height);
    return{x:r.left+(1-landmark.x)*r.width,y:r.top+landmark.y*r.height};
  }
  root.CameraSpace={frame,point};
  if(typeof module!=='undefined')module.exports=root.CameraSpace;
})(typeof window!=='undefined'?window:globalThis);
