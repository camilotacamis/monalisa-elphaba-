function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background("black");
    fill("green")
    ellipse(200, 200, 260, 310);
    fill("white")
    circle(150,150,60);
    circle(250,150,70);
    arc(200, 250, 90, 70, 0, 2, CHORD)
    fill("black")
    ellipse(200, 210, 50, 30);
    line(123,115,178,113);
    line(225,106,279,106);
    //circle(150, 150, 30);
    //circle(250, 150, 30);
   olhoX = map(mouseX, 0, 400, 140, 155);
   olhoY = map(mouseY, 0, 400, 133, 160);
  
    circle(olhoX, olhoY, 30); 
    circle(olhoX + 100, olhoY, 30);
    if ( mouseIsPressed) {
      console.log(mouseX, mouseY);
    } 
  }  