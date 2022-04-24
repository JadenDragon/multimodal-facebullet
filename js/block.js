class Block {
    constructor() {
        this.r = 39
        this.x = random(20, width - 20);
        this.y = 20;
        //this.lengte;
        //this.breedte;
        this.velY = 3;
        this.visible = true;
    }

    show(x) {
        if (this.visible === true) {
            x = this.x;
            fill(230, 180, 0);
            rect(this.x, this.y, 80, 30);
            //rect(50, 80, this.lengte, this.breedte);
        } else if (this.visible === false) {
            rect(0, 0, 0, 0);
        }
    }

    fall() {
        this.y = this.y + this.velY;
    }
}