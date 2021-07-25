var PLAY = 1;
var END = 0;
var gameState = PLAY;
var life =5;
var boy, boy_running, boy_collided;


var  bgImage;
var monster, monsterGroup; 
var gem;
var score=0;

var gameOver, restart;



function preload(){
  boy_running =   loadAnimation("boy_1.png","boy_2.png", "boy_4.png","boy_5.png","boy_6.png","boy_7.png","boy_8.png" );
  boy_collided = loadAnimation("boy_1.png");
  
  monsterImg = loadImage ("monster.png")
  gemImg = loadImage ("gem.png")

  
  //gameOverImg = loadImage("gameOver.png");
  //restartImg = loadImage("restart.png");
  pathImage = loadImage("background.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
path = createSprite(width/2,50,width+500,height);
path.scale=5
path.addImage(pathImage);

runner = createSprite(width/4,height/2,30,30);
runner.addAnimation("boy_running",boy_running);
runner.addAnimation("collided",boy_collided);
runner.scale = 0.45;
//runner.debug=true
runner.setCollider("rectangle",-250,-50,150,200)

monsterGroup=new Group();
//gemgroup = new Group();
//lifegroup = new Group();


//gameover = createSprite(width/2,200);
//gameover.addImage(gameoverImage);
//gameover.scale = 1.5;
//gameover.visible = false;

//win = createSprite(width/2,200);
//win.addImage(winimg);
//win.scale = 1.5;
//win.visible = false;


  //restart = createSprite(width/2,400);
  //restart.addImage(restartimg);
  //restart.scale = 0.2;
//restart.visible = false;
}

function draw() {
  background("white");
  edges = createEdgeSprites()
  runner.collide(edges[2]) 
  runner.collide(edges[3])
  if(gameState===PLAY){
  path.velocityX = -8;
  if(path.x < 0 ){
    path.x = width/2;
  }

  if(touches.length > 0  || keyDown("up_arrow")){
    runner.y=runner.y-11; 
    
    }
    if(touches.length > 0 || keyDown("down_arrow")){
     runner.y=runner.y+11; 
      touches = []; 
    }
    if(touches.length > 0  || keyDown("left_arrow")){
      runner.x=runner.x-11; 
      
      }
      if(touches.length > 0 || keyDown("right_arrow")){
       runner.x=runner.x+11; 
        touches = []; 
      }
  
 
  
//spawncoin();
   //spawnMonster();
   
  // spawnMonster1();
   //spawnMonster2();
  //spawnMonster3();
   //spawnMonster4();
   //spawnlife();
   spawnMonster();
   if(monsterGroup.isTouching(runner)){
    monsterGroup.destroyEach();  
    life = life -1 ;
    gameState = END;
    }  
    } else if(gameState===END) { 
    path.velocityX = 0;
    runner.velocityX = 0;
    runner.change66Animation("collided",boy_collided)
    }

   //if(mousePressedOver(restart)) {
    //reset();
  //}
  drawSprites();

   
    // if(coingroup.isTouching(runner)){
    //   coingroup.destroyEach();  
    // score= score +1;
    //   }  
 //for(var i  = 0;i<coingroup.length;i++){
    //if(coingroup.get(i).isTouching(runner)){ 
        //coingroup.get(i).destroy()
        //score = scor ze +1
        //coinsound.play();
      //} 
 }
    
 //for(var i  = 0;i<monsterGroup.length;i++){
  //if(monsterGroup.get(i).isTouching(runner)){ 
    //monsterGroup.get(i).destroy()
      // life = life -1
      // monstersound.play();
      // if(life===0){
      //   gamestate = "end";
      // }
//     } 
// }

//for(var i  = 0;i<lifegroup.length;i++){
  //if(lifegroup.get(i).isTouching(runner)){ 
   // lifegroup.get(i).destroy()
      //life = life +1
      //lifesound.play();
   // } 
//}


        //if(score===25){
          //gamestate = "win";
         // winsound.play();
      //  }
 // if(gamestate==="end"){
 //gameover.visible = true;
// restart.visible = true;
//gameoversound.play();
//  runner.destroy();
//  monsterGroup.destroyEach();  
 //coingroup.destroyEach(); 
// lifegroup.destroyEach();
 //}

 //if(gamestate==="win"){
  //win.visible = true;
  //restart.visible = true;
  //runner.destroy();
 //monsterGroup.destroyEach();  
 //coingroup.destroyEach(); 
 //lifegroup.destroyEach();
 //path.velocityY = 0;
 //path.velocityX = 0;
 
// }




 






//stroke("orange");
//strokeWeight(5);
//textSize(30);
//fill("blue");
//text("COINS : "+score,windowWidth-400,70);
//stroke("gold");
//strokeWeight(5);
//textSize(30);
//fill("red");
//text("LIFE : "+life,windowWidth-400,120);

//textSize(18);
//stroke("yellow");
//strokeWeight(5);
//fill("black");
  //text("CLICK THE LEFT OR  RIGHT ARROW KEYS TO MOVE THE RUNNER ",50,30);
  //text(" YOU CAN WIN THE GAME BY SCORING 25 COINS ",50,60);
  //textSize(50);
  //text("  MAYOOKH ",windowWidth-400,windowHeight-100);
//}
// function spawnMonster(){
//   if(frameCount%30===0){
//   monster=createSprite(300,100,20,20); 
//   monster.velocityY=6;  
//   monster.scale=0.2;
//   monster.addImage(monsterImg);
//   monster.x=Math.round(random(100,windowWidth-300));
//   monsterGroup.add(monster);
//   }  
// }
//function spawngem(){
 // if(frameCount%30===0){
 // coin=createSprite(300,100,20,20); 
 // coin.velocityY=6;  
 // coin.scale=0.5;
 // coin.addImage(coinimg);
  //coin.x=Math.round(random(100,1200));
  //coingroup.add(coin);
 // }  


//function spawnlife(){
 // if(frameCount%50===0){
 // lifeadd=createSprite(300,100,20,20); 
  //lifeadd.velocityY=6;  
  //lifeadd.scale=0.1;
  //lifeadd.addImage(lifeimg);
  //lifeadd.x=Math.round(random(100,1200));
  //lifegroup.add(lifeadd);
 // }  
//}

function spawnMonster(){
  if (World.frameCount%80===0){
    monster=createSprite(width-100,height/4,20,20);
    monster.addImage(monsterImg);
    monster.scale = 0.2;
    monster.y = Math.round(random(100,height-100));
    monster.velocityX=-4;
    monster.setLifetime=100;
    //monster.debug = true;
    
    
    
    
    monsterGroup.add(monster);
    
  }
}



//function reset(){


  //runner.visible = true;
  //monsterGroup.visible = true;
 // coingroup.visible = true;
  // score = 0;
  // location.reload();
//}

