const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform;
var block;
var ball, slingshot;
var gameState = "onShooter";



function setup() {
createCanvas(600,400);
engine = Engine.create();
 world = engine.world;

platform=new Platform(350,350,120,10);
platform1=new Platform(460,270,10,80);

platform3=new Platform(370,170,90,10);

block=new Block(350,340,10,10);
block1=new Block(360,340,10,10);
block2=new Block(390,340,10,10);
block3=new Block(380,340,10,10);
block4=new Block(390,340,10,10);
block5=new Block(360,330,10,10);
block6=new Block(350,330,30,10);
block7=new Block(400,340,40,10);
block8=new Block(400,340,30,10);
block9=new Block(390,145,20,20);
block10=new Block(390,135,20,20);
block11=new Block(400,145,20,20);
block12=new Block(400,135,20,20);
//block13=new Block(395,25,10,10);
ball=new Ball(150,280,20);
slingshot = new SlingShot(ball.body,{x:150, y:280});
}

function draw() {
 background("Brown");  
 text("Vanishing Blocks",300,50);
 Engine.update(engine);
platform.display();
platform1.display();

platform3.display();
block.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
//block13.display();
ball.display();
slingshot.display();

}

function mouseDragged(){
    if (gameState!=="inAir"){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
}

function mouseReleased(){
    slingshot.fly();
    gameState = "inAir";
}
 
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(ball.body);
        gameState="onSho0ter"
    }
}
