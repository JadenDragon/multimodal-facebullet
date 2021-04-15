class Bullet {
    constructor(x, y) {
        this.r = 5;
        this.x = x;
        this.y = y;
        this.velY = 2;
        this.visible = true;
    }

    show() {
        if (this.visible === true) {
            fill(0, 180, 230);
            rect(this.x, this.y, 5, 20);        
        } else if (this.visible === false) {
            rect(-10, -10, 0, 0);
        }
        this.y-=this.velY;
    }

    hits(block) {
        //console.log(block);
        return collideRectRect(this.x, this.y, this.r, this.r, block.x, block.y, block.r, block.r);
    }

    
}
