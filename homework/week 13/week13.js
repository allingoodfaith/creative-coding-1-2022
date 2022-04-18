var x = 50;
var y = 50;
var diameter = 25;
var mousex = 0;
var mousey = 0;
var s = 50;
var w = 50;
var a = 50;
var d = 50;


function setup (){
    createCanvas(500,500);
}

function playercharacter(){
    circle (50,50,40)  
}

function mousePressed() {
  mousex = mouseX;
  mousey = mouseY;
}

function mouseclick(){
    circle(mousex, mousey, 15,15);
}

//movment
function controlCircle() {
  if (x >= 300) {
    x = 50;
  }

  if (y >= 300) {
    y = 50;
  }

  if (keyIsDown(s)) {
    y += 10;
  } else if (keyIsDown(w)) {
    y -= 10;
  }

  if (keyIsDown(d)) {
    x += 10;
  } else if (keyIsDown(a)) {
    x -= 10;
  }

function boarder() {
  fill(0);
  // top border
  rect(0,0,width,10);
  // left border
  rect(0,0,10,height);
  // bottom border
  rect(0, height-10,width, 10);
  // right upper border
  rect(width-10,0,10,height-50);  

}

function draw (){
    background (217,209,230)
    boarder 
    playercharacter ( 250,250,100)
   //movement 
    controlCircle 
    ellipse(mousex, mousey, 15, 50);
      // make the locations of the circles random
  // concentric circle where x = 110 and y = 120
  ConcentricCircle(110, 120, 100, 50, 50, 120, 120, 120, 50, 120);
  // concentric circle where x = 210 and y = 220
  ConcentricCircle(210, 220, 100, 50, 50, 120, 120, 120, 50, 120);
}

}
