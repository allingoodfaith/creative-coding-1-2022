function setup()
{
    createCanvas(400,400);
}
function draw()
{
    background(220);
    circle(100,250,30);
    headX+=headDirection;
    if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }
    circle(300,250,30);
    rect(300,250,50,60);
    ellipse(250,250,100,150);
    circle(200,250,20);
    circle(200,250,50);
    circle(300,250,20);
    circle(300,250,50);
    triangle(240,65,250,75,260,65);
    point(190,300);
    line(230,100,230,200);
    text('its me',250,50);

  
    textSize(50);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text('its me',250,50);
}