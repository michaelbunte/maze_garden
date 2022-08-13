var wallSize;
var wallArrs;
var canDims;
var iter;
var maxWalls;
var updateableWalls;
var drawingWalls;
var ball;
function setup() {
  iter = createVector(-1,-1);
  canDims = createVector(500, 500);
  wallSize = createVector(35, 25);
  maxWalls = createVector(int(canDims.x/wallSize.x) + 1, int(canDims.y/wallSize.y) + 1);
  createCanvas(canDims.x, canDims.y);
  drawingWalls = true;
  background(125);
  
  wallArrs = [];
  updateableWalls = [];
  for(var j = -1; j < maxWalls.y; j++) {
    wallArrs[j] = [];
  }
  ball = new Ball();
}

function Ball() {
  this.randomPos = function() {
    var returnPos = createVector(int(random(maxWalls.x) * 2) * wallSize.x * 0.5, int(random(maxWalls.y) * 2) * wallSize.y * 0.5 - wallSize.y / 3);
    return returnPos;
  }
  this.drawBall = function() {
    fill(255,0,0);
    noStroke();
    circle(this.startPos.x, this.startPos.y, 20);
  }
  
  this.startPos = this.randomPos();
  
  console.log(this.startPos);
}

function draw() {
  //background(0);
  
  if(iter.y < maxWalls.y) {
    var newWall = new Wall(iter.x * wallSize.x, iter.y * wallSize.y);
    wallArrs[iter.y].push(newWall);
    updateableWalls.push(newWall);
    
    iter.x++;
    if(iter.x > maxWalls.x) {
      iter.x = 0;
      iter.y++;
    }
  } else if (updateableWalls.length == 0){
    drawingWalls = false;
  }
  for(var i = updateableWalls.length - 1; i > 0; i--) {
    updateableWalls[i].update();
    if(updateableWalls[i].updateable == false) {
      updateableWalls.splice(i, 1);
    }
  }
  ball.drawBall();
  
}