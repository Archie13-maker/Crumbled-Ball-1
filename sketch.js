
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
}

function setup() {
	var canvas=createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1=new ball(200,600,30);
	ground=new Ground(400,650,800,30);
	dustbin1=new Dustbin(500,630,150,10);
	dustbin2=new Dustbin(570,600,10,70);
	dustbin3=new Dustbin(430,600,10,70);

    Engine.run(engine);  
}
function draw() {
  background(0);
  Engine.update(engine);
  ball1.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}

function keyPressed() {
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.pos,{x:100, y:350});
	}
}



