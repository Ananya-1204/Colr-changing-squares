var r1, r2;
var r3, r4;
function setup() {
  createCanvas(1000,1000);
  r1 = createSprite(100, 500, 100, 100);
  r2 = createSprite(900, 500, 100, 100);
  r3 = createSprite(500, 100, 100, 100);
  r4 = createSprite(500, 900, 100, 100);
  r1.velocityX = +4;
  r2.velocityX = -4;
  r3.velocityY = 4;
  r4.velocityY = -4;
  r1.shapeColor="red";
  r2.shapeColor= "green";
  r3.shapeColor= "blue";
  r4.shapeColor= "orange";
}

function draw() {
  background(0, 40, 59);  
  BounceOff(r1, r2);
  BounceOff(r3, r4);
  if(isTouching(r1, r2)) {
    r1.shapeColor = "green";
    r2.shapeColor = "red";
  }
  if(isTouching(r3, r4)) {
    r3.shapeColor = "orange";
    r4.shapeColor = "blue";
  }
  drawSprites();
}

