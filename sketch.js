function setup() {
  createCanvas(600, 600, WEBGL);
  noiseDetail(0.5);
  angleMode(DEGREES);
}

function draw() {
  var framePerc = frameCount / 50;
  var boxVolume = 5;
  var offsetX = 0;
  var offsetY = 0;
  
  background(0, 0, 0);
  rotateX(45);
  
  for(var w = -width/4; w <= width/4; w += boxVolume){
    offsetY=0;
    for(var h = -height/4; h<= height/4; h += boxVolume){
      var noiseSurface = map(noise(offsetX + framePerc, offsetY + framePerc), 0, 1, -50, 50);
      
      push();
      translate(w,h,noiseSurface);
      box(boxVolume);
      pop();
  
      offsetY +=0.1;
    }
    offsetX += 0.1;
  }
  
}
