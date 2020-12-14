class rectangle{
    constructor(x,y){
    var options={
    isStatic:true
    }
    this.body=Bodies.rectangle(x,y,10,70,options)
    this.width=10
    this.height=70
    World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
    
    }
    }
    