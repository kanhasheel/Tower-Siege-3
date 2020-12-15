const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, ground2;
var block8,block9,block10,block11,block12,block14,block15,block16;
var block1,block2,block3,block4,block5,block6,block7,block17;
var Slingshot;
var polygon, polygonImage;
var score=0;


function preload(){
  polygonImage=loadImage("polygon.png");
  
}

function setup() {
  createCanvas(1000,400);

  engine = Engine.create();
  world = engine.world;
  
  Engine.run(engine);
  
  ground= new Ground(100,400,2000,50);
  Stand1 = new Ground(400,267,300,20);

  Stand2 = new Ground(650,150,220,20);
  
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);

  block1 = new Box(590,120,30,40);
  block2 = new Box(680,120,30,40);
  block3 = new Box(710,120,30,40);
  block4= new Box(650,120,30,40);
  block5= new Box(620,120,30,40);
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  polygon = new Polygon(this.ball,{x:100,y:200});


  block13= new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);

  block6= new Box(680,80,30,40);
  block7= new Box(620,80,30,40);
  block17 = new Box(650,80,30,40);



  block16 = new Box(390,155,30,40);
  block18 = new Box(650,40,30,40);

  blocks1 = new Box(640, 175, 30, 40);
  blocks2 = new Box(670, 175, 30, 40);
  blocks3 = new Box(700, 175, 30, 40);
  blocks4 = new Box(730, 175, 30, 40);
  blocks5 = new Box(760, 175, 30, 40);

  blocks6 = new Box(670, 135, 30, 40);
  blocks7 = new Box(700, 135, 30, 40);
  blocks8 = new Box(730, 135, 30, 40);

  blocks9 = new Box(700, 95, 30, 40);
 
  
   
}

function draw() {
background(0)
  textSize(20);
  fill("white");
 text("Score: "+score, 750, 50);

 ground.display();
 Stand1.display();
 Stand2.display();
 strokeWeight(2);
 stroke(15);
 fill("green");
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 fill("pink");
 block8.display();
 block9.display();
 block11.display();
 block12.display();
 fill("blue");
 block10.display();
 fill("orange");
 block13.display();
 block14.display();
 block15.display();
 block16.display();
 fill("green");
 blocks1.display();
 blocks2.display();
 blocks3.display();
 blocks4.display();
 blocks5.display();
 fill("white");
 blocks6.display();
 blocks8.display();
 fill("blue");
 blocks7.display();
 fill("orange");
 blocks9.display();
 block1.score();
 block2.score();
 block3.score();
 block4.score();
 block5.score();
 block6.score();
 block7.score();
 block8.score();
 block9.score();
 block10.score();
 block11.score();
 block12.score();
 block13.score();
 block14.score();
 block15.score();
 block16.score();
 blocks1.score();
 blocks2.score();
 blocks3.score();
 blocks4.score();
 blocks5.score();
 blocks6.score();
 blocks7.score();
 blocks8.score();
 blocks9.score();
  
  

  imageMode(CENTER);
  image(polygonImage, ball.position.x, ball.position.y,40,40);
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x:mouseX, y:mouseY});
}
function mouseReleased(){
  polygon.fly();
}
function keyPressed(){
   if(keyCode === 32){
     polygon.attach(this.ball);
   }
}
