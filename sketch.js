const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {
   polygonImg = loadImage("polygon.png");
}

function setup() {
	createCanvas(1000, 500);
   engine = Engine.create();
	world = engine.world;

   platform = new Ground(500,470,1200,20);
     
   stand1 = new Ground(485,350,280,20);
   stand2 = new Ground(785,200,210,20);

   box1 = new Box(380,318,35,45);
   box2 = new Box(415,318,35,45);
   box3 = new Box(450,318,35,45);
   box4 = new Box(485,318,35,45);
   box5 = new Box(520,318,35,45);
   box6 = new Box(555,318,35,45);
   box7 = new Box(590,318,35,45); 

   box8 = new Box(415,273,35,45);
   box9 = new Box(450,273,35,45);
   box10 = new Box(485,273,35,45);
   box11 = new Box(520,273,35,45);
   box12 = new Box(555,273,35,45);

   box13 = new Box(450,228,35,45);
   box14 = new Box(485,228,35,45);
   box15 = new Box(520,228,35,45);

   box16 = new Box(485,183,35,45);

   box17 = new Box(715,168,35,45);
   box18 = new Box(750,168,35,45);
   box19 = new Box(785,168,35,45);
   box20 = new Box(820,168,35,45);
   box21 = new Box(855,168,35,45);

   box22 = new Box(750,123,35,45);
   box23 = new Box(785,123,35,45);
   box24 = new Box(820,123,35,45);

   box25 = new Box(785,78,35,45);
   
   polygon = Bodies.circle(50,200,20);
   World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:50, y:200})

  Engine.run(engine);
	
}

function draw(){
    background("brown");

   platform.display();
   stand1.display();
   stand2.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   box13.display();
   box14.display();
   box15.display();
   box16.display();
   box17.display();
   box18.display();
   box19.display();
   box20.display();
   box21.display();
   box22.display();
   box23.display();
   box24.display();
   box25.display();
  slingShot.display();

   imageMode(CENTER);
   image(polygonImg,polygon.position.x,polygon.position.y,40,40)
 

}

function mouseDragged(){
   
   Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});

}

function mouseReleased(){
   slingShot.fly();
} 