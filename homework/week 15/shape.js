class Square {

    //constructor 
    constructor(x,y,w,h,r,b,g)
    {
        this. x=x;
        this. y=y;
        this. w=w;
        this. h=h;
        this. r=r;
        this. b=b;
        this. g=g;
    }
   
    //color and size
    display ()
    {
        fill(this.r, this.b, this.g);
        square (this.x, this.y, this.w);
    }
}