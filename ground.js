class Ground{

    constructor(x,y,w,h){
        var option={
            isStatic:true
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

        rectMode(CENTER);
        fill("pink");
        rect(pose.x,pose.y,this.w,this.h);


    }

}