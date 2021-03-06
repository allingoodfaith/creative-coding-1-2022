// x and y for my character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

//array for square object
var squareObject = [];

//arrays for circles 
var myXs = []; 
var myYs = []; 
var myDiameters = []; 


function setup() {
    createCanvas(500, 600);

    // creating sqaure object
    squareObject[0] = new Square(180,200,30,90,193,173,217);
    squareObject[1] = new Square(300,50,15,200,193,173,217);
    squareObject[2] = new Square(400,500,25,200,193,173,217);
    squareObject[3] = new Square(30,380,40,200,193,173,217);

    // get a random speed when the it first starts
    for (var i = 0; i < 50; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
    }

    for(var i = 0; i < 2; i++)
    {
        // get all the random numbers to create a circles
        myXs[i] = getRandomNumber(800);
        myYs[i] = getRandomNumber(600);
        myDiameters[i] = getRandomNumber(100);
    }

    createCharacter(200, 350);
}

function draw() {
    background(201, 228, 255);
    stroke(0); 

    //draws square
    for (var i = 0; i < 4; i++){
        squareObject[i].display();
    }

    fill(0);

    // call createBorders function
    createBorders(10);

    // exit message
    textSize(16);
    text("EXIT", width - 50, height - 50)

    //createCharacter(200,350);
    drawCharacter();
    characterMovement();


    //circle function 
          circle(x, y, diameter);

    // call the function created
    controlCircle();

    ellipse(mousex, mousey, 15, 50);

    for(var i = 0; i < myXs.length; i++)
    {
      // concentric circle randomly using arrays
      ConcentricCircle(myXs[i], myYs[i], myDiameters[i], myDiameters[i]/2, 50, 120, 120, 120, 50, 120);
    }


    // potential enemy
    fill(201, 75, 102);
    // draw the shape
    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);



        // move the shape
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        // check to see if the shape has gone out of bounds
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }

        function controlCircle()
        {
          if (x >= 300) 
          {
            x = 50;
          }
          
          if (y >= 300) 
          {
            y = 50;
          }
    
          if (keyIsDown(s)) 
          {
            y += 10;
          } 
          else if (keyIsDown(w)) 
          {
            y -= 10;
          }
    
          if (keyIsDown(d)) 
          {
            x += 10;
          } 
          else if (keyIsDown(a)) 
          {
            x -= 10;
          }
      
            // we call the function here.
            changeDiameter();
    
        }
    
        // This function updates the size of the circle
        function changeDiameter()
        {
            if (diameter < 200) 
            {
                diameter += 2;
            } 
            else if (diameter >= 200) 
            {
                diameter = 25;
            }
    
        }
    
        function mouseMoved() 
        {  
          mousex = mouseX;
          mousey = mouseY;
        
        }
    
        function getRandomNumber(number)
        {
            return Math.floor(Math.random()*number)+10;
        }
    
        // define ConcentricCircle function
        function ConcentricCircle(x,y, outer_diameter, inner_diameter, outer_red, outer_green,outer_blue, inner_red, inner_green, inner_blue)
        {
            fill(outer_red,outer_green, outer_blue);
            circle(x,y,outer_diameter);
            fill(inner_red, inner_green, inner_blue);
            circle(x,y,inner_diameter);
        }


    }
    // check to see if the character has left the exit
    if (characterX > width && characterY > width - 50) {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width / 2 - 50, height / 2 - 50);
    }

    // create the shape based on the mouse click
    fill(120, 130, 140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function characterMovement() {
    // handle the keys
    if (keyIsDown(w)) {
        characterY -= 10;
    }
    if (keyIsDown(s)) {
        characterY += 10;
    }
    if (keyIsDown(a)) {
        characterX -= 10;
        console.log("movement: " + characterX);
    }
    if (keyIsDown(d)) {
        characterX += 10;
    }
}

function createCharacter(x, y) {
    characterX = x;
    characterY = y;
}

function drawCharacter() {
    fill(122, 218, 245);
    circle(characterX, characterY, 25);
}

function createBorders(thickness) {
    // top border
    rect(0, 0, width, thickness);
    // left border
    rect(0, 0, thickness, height);
    // bottom border
    rect(0, height - thickness, width, thickness);
    // right upper border
    rect(width - thickness, 0, thickness, height - 50);
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}