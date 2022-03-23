
var river, riverImg ;
var player, playerBoat;
var opponent, opponentBoat
var PLAY = 1;
var END = 0;
var gamestate = PLAY

var score;

var opponentGroup;

function preload(){
     
    riverImg = loadImage("background.png");
    opponentBoat = loadImage("mean_boat.png");
    playerBoat = loadImage("player_boat.png");
}

function setup() {
     createCanvas(600, 1000);
     
     river = createSprite(300, 1000);
     river.addImage("river", riverImg);
     river.scale = 10;

     player = createSprite(200, 340);
     player.addImage("player", playerBoat);
     player.scale = 0.75;
     
     opponentGroup = createGroup();
    
}

function draw() {
 
      background(200);
     text("Score: "+ score, 500,50);
       
     if(keyDown("left_arrow")) {
          player.velocityX = -5;
      }

      if(keyDown("right_arrow")) {
          player.velocityX = 5;
      }

  if(gamestate === PLAY){
    
     river.velocityY = -4;
   
     score = score + Math.round(frameCount/60);
  }

     if (river.y < 0){
       river.y = river.height/8;
     }

     if(opponentGroup.isTouching(player)){
          gamestate = END;
      }
    
     else if (gamestate === END) {
        river.velocityY = 0;
       
       opponentGroup.setVelocityYEach(0);
       
     }

     spawnEnemy();

     drawSprites();
}


function spawnEnemy() {
   
      if (frameCount % 60 === 0) {
        opponent = createSprite(600,100,40,10);
       opponent.x = Math.round(random(10,60));
       opponent.addImage(opponentBoat);
       opponent.scale = 1;
       opponent.velocityX = -5;
       
        
       opponent.lifetime = 134;
       
       
      opponentGroup.add(opponent);
       }
   }