const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig
var log
var box3
var box4
var pig2
var log2
var box5,log3,log4,bird
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    pig = new Pig(800,350)
    box1 = new Box(700,320,70,70);
    box2 = new Box(900,320,70,70);
    ground = new Ground(600,height,1200,20)
    log = new Log(800,260,300,PI/2)
    box3 = new Box(700,240,70,70)
    box4 = new Box(900,240,70,70)
    pig2 = new Pig(800,240)
    log2 = new Log(800,200,300,PI/2)
    box5 = new Box(800,180,70,70)
    log4 = new Log(760,150,150,PI/9)
    log5 = new Log(860,150,150,-PI/9)
    bird = new Bird(500,500)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    log.display();
    box3.display();
    box4.display();
    pig2.display(); 
    log2.display();
    box5.display();
    log4.display();
    log5.display();
    bird.display();
}