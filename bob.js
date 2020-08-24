class Bob{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.8,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,r,options);
        this.radius = r;
        this.image=loadImage("paper.png");
    
         World.add(world,this.body)   
    }
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push()
    translate(pos.x,pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius,this.radius);
    pop()
}
}