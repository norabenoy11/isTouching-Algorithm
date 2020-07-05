var Fixed_rect;
var Moving_rect;

function setup() {
  createCanvas(800,400);

  Fixed_rect = createSprite (200,200,100,50);
  Fixed_rect.shapeColor = "Green";

  Moving_rect = createSprite (200,100,100,50);
  Moving_rect.shapeColor = "Green";

  Moving_rect.debug = true;
  Fixed_rect.debug = true;
}

function draw() {
  background(255,255,255);  

  Moving_rect.x = World.mouseX;
  Moving_rect.y = World.mouseY;

  if(Moving_rect.x - Fixed_rect.x < Moving_rect.width/2 + Fixed_rect.width/2
   && Fixed_rect.x - Moving_rect.x < Moving_rect.width/2 + Fixed_rect.width/2
   &&Fixed_rect.y - Moving_rect.y < Moving_rect.height/2 + Fixed_rect.height/2
    ){
    Moving_rect.shapeColor = "Red";
    Fixed_rect.shapeColor = "Red";
}
  drawSprites();
}