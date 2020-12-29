class Box{

    constructor(x,y,w,h){
        var option={
            restitution:1,
            density:1,
            friction:1
        }

        this.body=Bodies.rectangle(x,y,w,h,option);
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;

        World.add(world,this.body)

    }


    display(){
        var pose=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pose.x,pose.y);
        rotate(angle);

        rectMode(CENTER);
        fill("pink");
        rect(0,0,this.w,this.h);
        pop();


    }

}