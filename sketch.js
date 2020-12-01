var bullet, wall,thickness;
var speed,weight;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  bullet=createSprite(100,200,50,50) 
  bullet.shapeColor="white"
  speed=random(2,90);
  weight=random(30,52);
  thickness=random(22,83)
  bullet.velocityX=speed
  wall=createSprite(650,200,thickness,height/2)
  wall.shapeColor="black"                            
}

function draw() {
  createCanvas(800,400);
  background(0); 
  bullet.depth=wall.depth+1
if(wall.x-bullet.x<bullet.width/2+wall.width/2){
  bullet.velocityX=0
var damage=0.5*speed*speed*weight/thickness*thickness*thickness

if(damage>10){
  bullet.shapeColor="red"
}


else if(damage<10){
  bullet.shapeColor="green"
}
}
  drawSprites();
}