var tower, towerImg;
var door,doorImg, doorG;
var climberImg, climberG, C;
var ghostImg, G;
var invisibleBlock, invisibleBlockG;









function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png")
  
  doorG = new Group();
  climberG = new Group();
  invisibleBlockG = new Group();
}






function setup(){
  createCanvas(600,600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg)
  tower.velocityY = 1
  
  G = createSprite(200,200,50,50);
  G.addImage("ghost",ghostImg)
  G.scale = 0.3
  
}

function draw(){
  background(0);
  if(tower.y>400){
    tower.y = 300
  }
  
  if(keyDown("left_arrow")){
    G.x = G.x-3;
  }
  
  if(keyDown("right_arrow")){
    G.x = G.x+3;
  }
  
  if(keyDown("space")){
    G.velocityY = -10
  }
  
  G.velocityY = G.velocityY+0.8
  
  if(climberG.isTouching(G)){
    G.velocityX = 0
  }
  
  if(invisibleBlockG.isTouching(G)||G.y>600){
    G.destroy();
    
  }
  
  spawnDoor();
  drawSprites();
}

function spawnDoor(){
  if(frameCount%240===0){
    door = createSprite(200,-50)
    door.addImage(doorImg);
    door.velocityY = 1
    door.lifetime = 800
    door.x = Math.round(random(120,400))
    doorG.add(door)
    
    C = createSprite(200,10);
    C.addImage(climberImg);
    C.velocityY = 1
    C.x = door.x
    C.lifetime = 800
    climberG.add(C)
    
    G.depth = door.depth
    invisibleBlock = createSprite(200,15)
    invisibleBlock.width = C.width
    invisibleBlock.height = 2
    invisibleBlock.x = door.x
    invisibleBlock.velocityY = 1
    invisibleBlock.debug = true
    invisibleBlockG.add(invisibleBlock)
    
  }
}