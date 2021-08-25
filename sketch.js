var box;
var edges;



function setup() {
  createCanvas(400,400);
  box = createSprite(200,200, 50, 50)
  box.shapeColor="red"

  edges=createEdgeSprites();



}



function draw() 
{
  background("black");

  if(keyDown("left")){
    box.x -= 4;
  }

  if(keyDown("right")){
    box.x += 4;
  }

  if(keyDown("down")){
    box.y += 4;
  }

  if(keyDown("up")){
    box.y -= 4;
  }
    
  box.collide(edges)
  
  
  
  drawSprites();
}




