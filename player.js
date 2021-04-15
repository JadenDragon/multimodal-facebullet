//let video;
let poseNet;
let pose;

class Player {
    constructor() {
      this.r = 50;
      this.x = width/2 - 30;
      this.y = height - 50;
      this.velY = 2.2;

    }

    //sets coordinates for player
    setCoords(x, y) {
      this.x = x;
      this.y = y;
    }

    
    getCoords() {
      return [this.x, this.y];
    }

    show(user) {

        if (pose) {
          //displays the video image with position
          //sets position of X from nose position X
          user = rect(image(video, this.x, this.y, this.r, this.r));
        }
    }

    hits(block) {
      return collideRectRect(this.x, this.y, this.r, this.r, block.x, block.y, block.r, block.r);
    }

    move(user) {

      if (pose) {
        //console.log(pose.nose.x)
        //update player position with nose pos
        this.x = pose.nose.x;

      } 
      
  }

  shoot() {
    if (keyIsDown(LEFT_ARROW)) {
        console.log("pewpew");
        let bullet = new Bullet(this.x+(this.r/2-5), this.y);
        bullets.push(bullet);
      }
  }


}