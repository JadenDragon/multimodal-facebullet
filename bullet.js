class Bullet {
    constructor(x, y) {
        this.r = 39
          this.x = x;
          this.y = y;
          this.velY = 2;
    }

    show() {
        rect(this.x, this.y, 10, 40);
        this.y+=this.velY;
    }
    
}
