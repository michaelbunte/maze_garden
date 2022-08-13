function Wall(x, y) {
    this.dir = int(random(0,2));
    this.updateable = true;
    this.updateCounter = 50;
    
    if(this.dir == 0) {
      this.startPos = createVector(x,y);
      this.endPos = createVector(wallSize.x + x, wallSize.y + y);
    } else {
      this.startPos = createVector(x,wallSize.y + y);
      this.endPos = createVector(wallSize.x + x, y);
    }
    
    // // noprotect
    // for(var i = 50; i >= 0; i--) {
    //   stroke(i * 2.5);
    //   line(this.startPos.x, this.startPos.y + i, this.endPos.x, this.endPos.y + i);
    // }
    // //stroke(150,0,0);
    // stroke(255);
    // line(this.startPos.x, this.startPos.y, this.endPos.x, this.endPos.y);
    
    this.update = function() {
      if(this.updateCounter >= 1) {
        stroke(this.updateCounter * 2.5);
        line(this.startPos.x, this.startPos.y + this.updateCounter, this.endPos.x, this.endPos.y + this.updateCounter);
        this.updateCounter--;
      } else if (this.updateCounter >=-255) {
        stroke(-this.updateCounter);
        line(this.startPos.x, this.startPos.y, this.endPos.x, this.endPos.y);
        this.updateCounter-=10
      } else {
         stroke(255);
        line(this.startPos.x, this.startPos.y, this.endPos.x, this.endPos.y);
        this.updatable = false;
      }
    }
  }