//let video;
let poseNet;
let pose;

class Player {
    constructor() {
      this.r = 50;
      this.x = width/2 - 30;
      this.y = height - 50;
      this.velY = 2;
      //this.user = rect(image(video, this.x, this.y, this.r, this.r));

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
          //fill(255,0,0);
          //ellipse(pose.nose.x, pose.nose.y, 44);

          //displays the video image with position
          //sets position of X from nose position X
          user = rect(image(video, this.x, this.y, this.r, this.r));
        }
    }

    hits(block) {
      //return collideRectRect(image(video, this.x), image(video, this.y), image(video, this.r), image(video, this.r), block.x, block.y, block.r, block.r);
      return collideRectRect(this.x, this.y, this.r, this.r, block.x, block.y, block.r, block.r);
    }

    move(user) {
        //this.y -= this.velY;
      // if (keyIsDown(LEFT_ARROW)) {
      //   this.x -= 5;
      // }
    
      // if (keyIsDown(RIGHT_ARROW)) {
      //   this.x += 5;
      // }
  
      // if (keyIsDown(UP_ARROW)) {
      //   this.y -= 5;
      // }
  
      // if (keyIsDown(DOWN_ARROW)) {
      //   this.y += 5;
      // }

      if (pose) {
        //console.log(pose.nose.x)
        //update player position with nose pos
        this.x = pose.nose.x;

        //fill(255,0,0);
        //ellipse(pose.nose.x, pose.nose.y, 44);

        //displays the video image with position
        //sets position of X from nose position X
        //rect(video, this.x, this.y, this.r, this.r);
        //image(video, pose.nose.x, this.y, this.r, this.r);
      } 
      else {
        //image(video, 300, this.y, this.r, this.r);
      }
  }

  shoot() {
    // if (keyIsDown(LEFT_ARROW)) {
      //   this.x -= 5;
      // }
  }


}