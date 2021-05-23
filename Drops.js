class Drops{
    constructor(x,y){
        var options = {
            'isStatic':false,
            'friction':0.1,
            'restitution':0.1,

        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,5,options);
        World.add(world,this.body);
    }
    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }

    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("blue");
        circle(this.body.position.x,this.body.position.y,5,5);
        pop()

    }
} 