class Block {
    constructor() {
        this.r = 39
        this.x = random(40, width);
        this.y = 20;
        this.velY = 2;
        this.visible = true;
    }

    show(x) {
        if (this.visible === true) {
            x = this.x;
            fill(230, 180, 0);
            rect(this.x, this.y, 80, 30);
        } else if (this.visible === false) {
            rect(0, 0, 0, 0);
        }
    }

    fall() {
        this.y = this.y + this.velY;
    }
}
