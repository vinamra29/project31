class Particle {
    constructor (x,y){
        var options = {
            restitution: 1,
            friction: 0,
        }
        this.r = 15
        this.bodies = Bodies.circle(x,y,this.r,options)
        this.color = color(random(0,255),random(0,255),random (0,255))
   World.add(world,this.bodies)
    }
    display(){
        var pos = this.bodies.position;
        var angle = this.bodies.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
      
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}