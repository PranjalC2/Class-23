const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var ground;
var box1,box2;




function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  ground=new Ground(400,390,800,10);

  box1= new Box(400,150,50,50);
  box2=new Box(410,300,60,80);
  
}

function draw() {
  background(255,255,255);  
  
  Engine.update(engine);

  ground.display();
  box1.display();
  box2.display();
  
}