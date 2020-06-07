const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var tanker,shooter;
var block1,block2,block3;

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

    shooter = new Shooter(115,300,300,130);
    tanker = new Tanker(150,320,400,200);
    
    block1 = new Blocks(350,50,50,50);
    block2 = new Blocks(457,50,50,50);
    block3 = new Blocks(700,50,50,50);
   
    
    ball1 = new Ball(100,350,20);
    
    ground = new Ground(600,395,1200,10);
    slingShooterObject = new SlingShooter(ball1.body,{x: 100, y:250});
  }

function draw() {
    background(backgroundImage);
    if(keyIsDown(UP_ARROW)){
      Matter.Body.setAngle(shooter.body, -120);

      }
    if(keyIsDown(DOWN_ARROW)){
    Matter.Body.setAngle(shooter.body, 120);
    }
  //if (keyIsDown(ENTER)){
      //Matter.Body.setPosition(ball1.body, {x: 200 , y:200});
    //slingShooterObject.attach(ball1.body);
    // gameState = 'launched';
      
  //}
  
  if(keyIsDown(32)){
    ball1.body.angle = shooter.body.angle;
    ball1.body.velocity.y=-1
    ball1.body.velocity.x=5;
    slingShooterObject.fly();
    
  }
    Engine.update(engine);
    ground.display();
    shooter.display();
    tanker.display();
    block1.display();
    block2.display();
    block3.display();
    
    ball1.display();
   


    slingShooterObject.display();
  }