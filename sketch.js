//create constant engine world and bodies
const Engine = Matter.Engine ;
const World = Matter.World; 
const Bodies = Matter.Bodies; 

//create my engine and my world
var myEngine, myWorld ; 
//create ground and boxes
var ground ;
var box1, box2;

function setup() {
  createCanvas(400,400);

  //this line of code will be constant and it is used to make the engine and world
  myEngine = Engine.create ();
  myWorld = myEngine.world;

  //create options for ground to keep it still (take away its gravity)
  var options = {
    isStatic : true
  }

  //create ground body and add options
  ground = Bodies.rectangle (200,390,400,20, options);
  //add ground to my world
  World.add (myWorld, ground);

  //create box1 and 2 using the box class
  box1 = new Box (200,200,50,50);
  box2=new Box (225,100,50,75);
  
}

function draw() {
  background("pink"); 
  
  //keep engine updated to make code work; this is also a constant line of code that you will repeat everytime 
  Engine.update (myEngine);

  //set mode of rectangle so that we can control its positions from its center
  rectMode(CENTER);
  //create rectangle for ground and give it ground's x and y position 
  rect (ground.position.x,ground.position.y,400,20);

  //display boxes using display in box class
  box1.display();
  box2.display();
  

}