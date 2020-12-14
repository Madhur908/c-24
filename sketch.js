var  helicopterImage,packageImage

const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body=Matter.Body
function preload(){
helicopterImage=loadImage("helicopter.png")
packageImage=loadImage("package.png")
}

function setup(){

var canvas=createCanvas(600,600)

engine=Engine.create()
world=engine.world
Ground=new ground(300,590)
Package=new paper(150,580)
Body1=new rectangle(350,550)
Body2=new rectangle(487,550)
}

  function draw(){
  background(0)
  Engine.update(engine)
  Ground.display()
  Package.display()
  Body1.display()
  Body2.display()

  }
  function keypressed(){
    if(keyCode === UP_ARROW){
      Matter.Body.applyForce(Package.body, Package.body.position,{x:85,y:-85}); 
     } 
   }
  
  
  

 
      

