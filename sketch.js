var movingsprite
var fixedsprite

function setup() {

  createCanvas(800,400);
  
   movingsprite = createSprite(700,100,100,100)
 

   fixedsprite = createSprite(500,200,100,200)

   
}


function draw() {
  movingsprite.x = World.mouseX
  movingsprite.y = World.mouseY
  
  movingsprite.shapeColor = "green"
  fixedsprite.shapeColor = "green"

  if (movingsprite.x - fixedsprite.x < movingsprite.width/2 + fixedsprite.width/2 && fixedsprite.x - movingsprite.x < movingsprite.width/2 + fixedsprite.width/2 && movingsprite.y - fixedsprite.y < movingsprite.width/2 + fixedsprite.width/2 && fixedsprite.y - movingsprite.y < movingsprite.width/2 + fixedsprite.width/2){
    

  movingsprite.shapeColor = "red";
  fixedsprite.shapeColor = "red"

}



  background(255,255,255);  
  drawSprites();
}