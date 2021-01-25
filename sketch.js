const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1;

function setup(){
    var canvas = createCanvas(1200, 900);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(500, 600, 50, 20);
}

function draw(){
    background(255);
    Engine.update(engine);
    ground1.display();
}
