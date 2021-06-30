var box;


function setup() {
  createCanvas(400, 400);
  box = createSprite(200,200,50,50);
  box.shapeColor = "magenta";
}

function draw() {
  background("lightgreen"); 

  if(keyIsDown(LEFT_ARROW)){
    box.position.x = box.position.x - 5;
  }

  if(keyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x + 5;
  }
  drawSprites();
}