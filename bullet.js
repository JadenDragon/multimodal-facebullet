class Bullet {
    constructor(x, y) {
        this.r = 39
          this.x = x;
          this.y = y;
          this.velY = 2;
    }

    show() {
        rect(this.x, this.y, 5, 20);
        this.y-=this.velY;
    }

}
