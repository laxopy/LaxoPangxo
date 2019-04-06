var circleM = {
			x : 10,
			y : 200,
			rad :10
  
}

var shoot = {
			x1 : 200,
			y1 : 400,
			y2 : 390
  
}

var dir = 1;
var x1;
function showCoords(event) {
  var x1 = event.clientX;
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150);
  fill(255,0,255);
  circle(circleM.x,circleM.y,circleM.rad);
  
if (circleM.x < (width - circleM.rad) && dir == 1){
  circleM.x ++
} else if (circleM.x == (width - circleM.rad) && dir == 1){
  dir = 2;
} else if (dir == 2 && circleM.x) {
  circleM.x -= 1;
} else {
  dir = 1;
}
//line (200,400,200,395)
line (shoot.x1,shoot.y1,shoot.x1,shoot.y2)
shoot.y1 = shoot.y1 - 1;
shoot.y2 = shoot.y2 - 1;
print (circleM.x);
print (dir);


//print(x1)

}