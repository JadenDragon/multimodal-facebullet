class Block {
    constructor() {
        this.r = 39
        this.x = random(40, width);
        this.y = 20;
        this.velY = 3;
    }

    show(x) {
        x = this.x;
        fill(230, 180, 0);
        rect(this.x, this.y, 80, 30);
    }

    fall() {
        this.y = this.y + this.velY;
    }
}
