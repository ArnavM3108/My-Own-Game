var bg, bgImg

var invader , invaderImg

function preload() {
  bgImg = loadImage("bg.jpg");

  invaderImg = loadImage("invader.png");

  shotImg = loadImage("Fire.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  bg = createSprite(width / 2, height / 2);
  bg.addImage(bgImg)


  invader = createSprite(width/2,height-100);
  invader.addImage(invaderImg)
  invader.scale = 0.25

 
}

function draw() {
  background(0);

 if(keyDown("space")){
  spawnShots()
 }

  drawSprites()
}

function spawnShots(){
  
  shots = createSprite(invader.x,invader.y);
  shots.addImage(shotImg)
  shots.scale = 0.15
  shots.rotation = shots.rotation + 180
}
