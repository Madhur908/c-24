class ground{
    constructor(x,y){
    var options={
    isStatic:true
    }
    this.body=Bodies.rectangle(x,y,600,20,options)
    this.width=600
    this.height=20
    World.add(world,this.body)
    }
    display(){
    var pos=this.body.position
    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height)
   
    }
    }
    