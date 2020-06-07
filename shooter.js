class Shooter{
   constructor(x,y,w,h){
     var options = {
         isStatic : true,
         'restitution' : 0.8,
          'friction':1.0,
          'density':1.0
     }
     this.body   = Bodies.rectangle(x,y,w,h,options);
     this.width  = w;
     this.height = h;
     World.add(world,this.body);
     this.image= loadImage("images/shooter.png")
    }
   display(){
      
        var angle = this.body.angle;
       
       
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        
       // rect(0,0,this.width, this.height);
       imageMode(CENTER);
        image(this.image, 0, 0, this.width+10, this.height+10);
        pop();
    
}
}
   