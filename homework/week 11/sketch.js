var x = 50;
var y = 75;
var diamete = 30;

function setup()
{    
    createCanvas(450,450);
}
function draw()
{
    background(220);
    
    //ears
    circle(70,200,80);
    circle(70,200,50);
    circle(330,200,80);
    circle(330,200,50);

    //neck
    rect(170,290,75,120);

    //head 
    ellipse(200,200,280,300);

    //glasses
    circle(140,180,80);
    circle(260,180,80);
    line(180,180,220,180)
    x++; 

    //eyes
    circle(140,180,50);
    circle(140,180,20);
    circle(124,170,15);
    circle(260,180,50);
    circle (260,180,20);
    circle(245,170,15);

    //nose
    triangle(185,240,200,200,215,240);
    
    //mole
    point(320,230);

    //hair
    triangle(100,100,40,110,70,250);
    triangle(100,100,40,110,90,60);
    triangle(90,60,100,100,190,30);
    triangle(100,100,90,150,115,175);
    triangle(100,100,190,29,200,95);
    triangle(90,60,180,6,190,30);
    triangle(190,30,200,95,270,60);
    triangle(200,95,270,60,300,125);
    triangle(190,30,270,60,280,10);
    triangle(270,60,280,10,340,40);
    triangle(270,60,340,40,350,95);
    triangle(270,60,335,90,300,125);
    triangle(300,125,335,185,335,85);
    triangle(335,230,335,90,360,190);
    
    //mouth 
    line(240,290,200,300);
    line(160,290,200,300);
    x+;
    y+;

    
    text('its me',190,440);
    if(x >= 800 || x <= 0)
    {
       movement *= -1;
    }

     x += movement;


}
