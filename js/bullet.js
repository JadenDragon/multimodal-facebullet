let sound;
//let explosion = new Audio("sound/zapsplat_explosions_short_small_explosion_no_tail_003_62730.mp3");

class Bullet {
    constructor(x, y) {
        this.r = 5;
        this.x = x;
        this.y = y;
        this.velY = 8;
        this.visible = true;
    }

    show() {
        if (this.visible === true) {
            fill(0, 180, 230);
            rect(this.x, this.y, 5, 20);
        } else if (this.visible === false) {
            rect(-10, -10, 0, 0);
        }
        this.y -= this.velY;
    }

    change() {
        if (this.visible === true) {
            fill(250, 50, 30);
            rect(this.x, this.y, 5, 20);
        } else if (this.visible === false) {
            rect(-10, -10, 0, 0);
        }
        this.y -= this.velY;
    }

    onHit(block) {
        //console.log(block);
        //explosion.play();
        //explosion.volume = 0.1;
        //console.log("hit");
        return collideRectRect(this.x, this.y, this.r, this.r, block.x, block.y, 80, 30);
    }

    // feedback(){
    //     sound = loadSound("sound/zapsplat_explosions_short_small_explosion_no_tail_003_62730.mp3", loaded);
    // }


}