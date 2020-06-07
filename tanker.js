class Tanker{
    constructor(x,y,w,h){
       var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w;
        this.height = h;
        World.add(world,this.body);
        this.image= loadImage("images/tank.png")
    }
    display(){
        var angle = this.body.angle;
        var pos   = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
       // rectMode(CENTER);
        //circle(0,0-50,20);
       // circle(0,0-40,90);
        //rect(0,0, this.width, this.height);
        //rect(0,0-20, this.width-10, this.height);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width+10, this.height+10);
        
       pop(); 
    }
}