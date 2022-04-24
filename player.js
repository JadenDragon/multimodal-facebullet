class Player {
    constructor() {
      this.r = 50
        this.x = width/2 - 30;
        this.y = height - 50;
        this.velY = 2;
    }

    //sets coordinates for player
    setCoords(x, y) {
      this.x = x;
      this.y = y;
    }

    
    getCoords() {
      return [this.x, this.y];
    }

    show() {
        rect(this.x, this.y, 50, 50);
    }

    hits(block) {
      return collideRectRect(this.x, this.y, this.r, this.r, block.x, block.y, block.r, block.r);
    }

    move() {
        //this.y -= this.velY;
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= 5;
          }
        
          if (keyIsDown(RIGHT_ARROW)) {
            this.x += 5;
          }
        
          if (keyIsDown(UP_ARROW)) {
            this.y -= 5;
          }
        
          if (keyIsDown(DOWN_ARROW)) {
            this.y += 5;
          }
    }


}