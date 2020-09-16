let corkX = 200;
let bottleX = 200;
let speed = 3;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  
  
  background(220);
  
  //bottle
  
  strokeWeight(0)
  fill(0);
  
 if (bottleX > width || bottleX < -200) {
   
  }
  bottleX = bottleX + speed;
  
  rect(bottleX + 37, 250, 126, 309);
  rect(bottleX + 45, 558, 110, 8);
  ellipse(bottleX + 45, 558, 16, 16);
  ellipse(bottleX + 155, 558, 16, 16);
  ellipse(bottleX + 67, 250, 60, 60);
  ellipse(bottleX + 133, 250, 60, 60);
  rect(bottleX + 58, 197, 84, 24);
  
  if (corkX > width || corkX < -200) {
    speed = speed*-1;
  }
  corkX = corkX + speed*-1;
  
  
  fill(0);
  rect(corkX + 58, 177, 84, 18);
  triangle(bottleX + 75, 221, bottleX + 100, 270, bottleX + 125, 221); //inside 
  rect(corkX + 57, 142, 86, 33);
  
    
  
  //handle
  rect(corkX + 52, 112, 4, 60);
  rect(corkX + 144, 112, 4, 60);
  arc(corkX + 100, 115, 96, 96, PI, TWO_PI);
  rect(corkX + 149, 142, 3, 27);
  rect(corkX + 48, 142, 3, 27);
  
  fill(220);
  
  arc(corkX + 100, 115, 88, 88, PI, TWO_PI);
  
  fill(0);
  triangle(bottleX + 142, 216, bottleX + 142, 225, bottleX + 150, 225);
  triangle(bottleX + 59, 216, bottleX + 59, 225, bottleX + 50, 225);
  fill(220);
  ellipse(bottleX + 250, 216, 16, 16);
  ellipse(bottleX + 150, 216, 16, 16);
    
}