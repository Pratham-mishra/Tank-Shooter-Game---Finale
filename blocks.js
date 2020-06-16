class Blocks{
    constructor(x,y,width,height) {
        var options = {
          'restitution' : 0.7,
          'friction' : 0.1,
          'density' : 0.5,
          'frictionAir' : 0.1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        strokeWeight(3);
        stroke(0);
        fill("red");
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
    
}
}