const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload() {


}

function setup() {
  createCanvas(1500, 700);
  engine = Engine.create();
  world = engine.world;
  hero = new Hero(200 ,50 , 100, 100);
  box1 = new Block(900, 100, 70, 70);
    box2 = new Block(900, 100, 70, 70);
    box3 = new Block(900, 100, 70, 70);
    box4 = new Block(900, 100, 70, 70);
    box5 = new Block(900, 100, 70, 70);
    box6 = new Block(900, 100, 70, 70);
    box7 = new Block(800, 100, 70, 70);
    box8 = new Block(800, 100, 70, 70);
    box9 = new Block(800, 100, 70, 70);
    box10 = new Block(800, 100, 70, 70);
    box11 = new Block(800, 100, 70, 70);
    box12 = new Block(800, 100, 70, 70);
    box13 = new Block(700, 100, 70, 70);
    box14 = new Block(700, 100, 70, 70);
    box15 = new Block(700, 100, 70, 70);
    box16 = new Block(700, 100, 70, 70);
    box17 = new Block(700, 100, 70, 70);
    box18 = new Block(700, 100, 70, 70);
    box19 = new Block(700, 100, 70, 70);
    box20 = new Block(700, 100, 70, 70);
    ground = new Ground(600,600,1200,20);
}

function draw() {
  background(0);
  Engine.update(engine)
  hero.display();
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
  ground.display();


}

