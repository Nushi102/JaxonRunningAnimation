//create variables for the game
  var Jaxon;
  var JaxonImg;
  var path;
  var pathImg;
  var invLeftWall
  var invRightWall

function preload(){

  //pre-load images
  JaxonImg = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png");
}

function setup(){

  //create the canvas
  createCanvas(400,400);

  //create path here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.scale=1.2;

//create Jaxon here
  Jaxon = createSprite(200,300);
  Jaxon.addAnimation("running",JaxonImg);
  Jaxon.scale=0.1;
  
//create walls here
  invLeftWall = createSprite(50,200,1,400);
  invLeftWall.visible=false;
  
  invRightWall = createSprite(357,200,1,400);
  invRightWall.visible=false;
}
mlpp
function draw() {

//create the background
  background(0);
  
//create velocity for the path in the +y direction
  path.velocityY=4;


//create an if condition so that the path scrolls forever
  if(path.y>500){
    path.y=height/2
  }

//create a property to connect the mouse to Jaxon
  Jaxon.x=mouseX

//collide Jaxon with the invisble walls
  Jaxon.collide(invLeftWall)
  Jaxon.collide(invRightWall)

//create an if condition so Jaxon doesn't go to far to the right
  if(Jaxon.x>273.15){
    Jaxon.x=273.15
  }

//create an if condition so Jaxon doesn't go to far to the left
  if(Jaxon.x<133.8){
    Jaxon.x=133.8
  }

//draw the sprites
  drawSprites()
}
