
var hr=hour();
var mn=minute();
var sc=second();
angleMode(DEGREES);




function setup() {
  createCanvas(200,200);
  
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn,0,60,0,360)
  hrAngle = map(hr % 12,0,12,0,360)

}

function draw() {
  background(0); 
  
  

  push();
  rotate(scAngle); 
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  push();
  rotate(mnAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  push();
  rotate(hrAngle); 
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);

  stroke(255,0,0);
  arc(0,0,300,300,0,mnAngle);

  stroke(255,0,0);
  arc(0,0,300,300,0,hrAngle);




  drawSprites();
}