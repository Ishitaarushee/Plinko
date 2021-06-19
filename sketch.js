const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = []
var plinkos = []
var divisions = []
var divisionheight = 300
var score = 0

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,800,800,20)
  for (var j = 75; j <= width; j=j+50)
  {
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 50; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j, 175));
  }
  for (var j = 75; j <= width; j=j+50)
  {
    plinkos.push(new Plinko(j, 275));
  }
  for (var j = 50; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j, 375));
  }
  for (var k = 0; k <=width; k=k+80) {
    divisions.push(new Division(k, height-divisionheight/2, 10,divisionheight));
  }
}

function draw() {
  background("black");
  Engine.update(engine);
  ground.display();

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
}

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }  
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }  
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }  
  
  drawSprites();
}