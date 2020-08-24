
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bobDiameter = 100;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	roof1= new Roof(400,50,900,50);

	bob1= new Bob(400,250,50);
	bob2= new Bob(500,250,59);
	bob3= new Bob(600,250,50);
	bob4= new Bob(700,250,50);
	bob5 = new Bob(800,250,50);

	rope1 = new Rope(bob1.body,roof1.body,-bobDiameter*2,0);
	rope2 = new Rope(bob2.body,roof1.body,-bobDiameter,0);
	rope3 = new Rope(bob3.body,roof1.body,0,0);
	rope4 = new Rope(bob4.body,roof1.body,bobDiameter,0);
	rope5 = new Rope(bob5.body,roof1.body,bobDiameter*2,0);

}

function draw() {
  rectMode(CENTER);
  background("pink");

  roof1.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();




  keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-5,y:-4.5});
	}
  }



