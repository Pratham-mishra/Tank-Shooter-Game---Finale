const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var tanker,shooter;
var block1,block2,block3,block4,block5,block6,block7;

var ball1,ball2,ball3;
var slingShooterObject;

var ground;

var backgroundImage,ballImage,tankImage;

function preload(){
    backgroundImage = loadImage("images/background.jpg");
    ballImage       = loadImage("images/ball.jpg");
    tankImage       = loadImage("images/tank.png");
}

function setup(){ 
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ball1 = new Ball(100,350,20);
    shooter = new Shooter(115,300,300,130);
    tanker = new Tanker(150,320,400,200);
    
    block1 = new Blocks(1100,350,50,50);
    block2 = new Blocks(1100,300,50,50);
    block3 = new Blocks(1100,250,50,50);
    block4 = new Blocks(1100,200,50,50);
    block5 =new Blocks(1100,150,50,50);
    block6 =new Blocks(1100,100,50,50);
    block7 =new Blocks(1100,50,50,50);
    
    
   
    
    
    
    ground = new Ground(600,395,1200,10);
    
    slingShooterObject = new SlingShooter(ball1.body,{x: 100, y:250});
  }
  
function draw() {
    background(backgroundImage);
    Engine.update(engine);
    angleMode(DEGREES);
    console.log(shooter.body.angle);
  
    if (slingShooterObject.sling.bodyA){
     ball1.body.position ={
       x : 115,
       y : 278
     }
    // console.log("ball");
    }
    if (shooter.body.angle === 0){
     
      slingShooterObject.sling.pointB = {
        x:1100,
        y:253
      }
     
      console.log(slingShooterObject.sling.pointB.x);
      console.log(shooter.body.angle);
       //console.log("Ball's X Position ",ball1.body.position.x);
        //console.log("Ball's Y Position ",ball1.body.position.y);

    }
    else if (shooter.body.angle === -30){
      slingShooterObject.sling.pointB = {
        x : 500,
        y : 10
      }
    }
    else if (shooter.body.angle ===-60){
      slingShooterObject.sling.pointB ={
        x :200,
        y :50
      }
    }
    else if(shooter.body.angle ===-90){
      slingShooterObject.sling.pointB ={
        x:90,
        y:50
      }
      ball1.body.position ={
        x:93,
        y:278
      }
    }
    
   //ball1.body.position.x= mouseX;
   //ball1.body.position.y=mouseY;

   /*  
   if(keyIsDown(UP_ARROW)){
      Matter.Body.setAngle(shooter.body, -120);

      }
    if(keyIsDown(DOWN_ARROW)){
    Matter.Body.setAngle(shooter.body, 120);
    }
  if (keyIsDown(ENTER)){
    Matter.Body.setPosition(ball1.body,{x: 100, y:250});
    slingShooterObject.attach(ball1.body);
     } */
  
 /*  if(keyIsDown(32)){
    ball1.body.angle = shooter.body.angle;
    ball1.body.velocity.y=-1
    ball1.body.velocity.x=5;
    slingShooterObject.fly();
    
  */ //}
  slingShooterObject.display();
    ground.display();
    ball1.display();
    shooter.display();
    tanker.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    
    slingShooterObject.attach(ball1.body);
   


    
    
  }
  function keyPressed(){

    if(keyCode===UP_ARROW && shooter.body.angle>-70){
      shooter.body.angle = shooter.body.angle-30;
     console.log(shooter.body.angle);
    }else
    if(keyCode===DOWN_ARROW && shooter.body.angle<0){
      shooter.body.angle = shooter.body.angle+30;
      
      console.log(shooter.body.angle);
    }
  }
  function keyReleased(){
    if (keyCode ===32){
      slingShooterObject.fly();
      console.log("Space Pressed");
    }
  }
