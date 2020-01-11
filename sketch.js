var r= 200;
var g= 30;
var b= 200;


function setup() {
 createCanvas(800, 600);  
}

function draw() {
 
  r,g,b = mouseX/5;
  background (r,g,b);
  fill ("pink");
  ellipse (mouseX, mouseY, 50, 50);
}
  