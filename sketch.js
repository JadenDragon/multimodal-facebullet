let player;
let block;
let collCheck = false;
let pCoords;
let bullets = [];
let blocks = [];

let video;
let flippedVideo;

function setup() {
  createCanvas(600, 600);
  video = createCapture(VIDEO);
  video.hide();
  flippedVideo = ml5.flipImage(video);

  poseNet = ml5.poseNet(video, {
    //flipHorizontal:true
  }, modelLoaded);
  poseNet.on('pose', gotPoses);

  player = new Player();
  block = new Block();
  pCoords = player.getCoords();
  //console.log(pCoords);
  //console.log(flippedVideo);
}

function gotPoses(poses) {
  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}

function modelLoaded() {
  console.log('poseNet ready');
}

function draw() {
  background(220);
  player.show();
  // block.show();
  // block.fall();
  pCoords = player.getCoords();
  player.move();
  player.shoot();
  
  
  for (let index = 0; index < bullets.length; index++) {
    let bullet = bullets[index];
    let bulletCheck;
    bullet.show();
    bulletCheck = bullet.hits(block);
    if (bulletCheck === true) {
      //remove(bullets, index);
      bullet.visible = false;
      console.log("DED bullet!");
    }  
  }

  // for (let index = 0; index < blocks.length; index++) {
  //   let block = blocks[index];
  //   let blockCheck;
  //   console.log(blocks[index]);
  //   //bulletCheck = bullet.hits(block);
  //   block.show();
  //   block.fall();
  //   // if (blockCheck === true) {
  //   //   //remove(bullets, index);
  //   //   bullet.visible = false;
  //   //   console.log("DED!");
  //   // }  
  // }

  
  if (random(1) < 0.004) {
    blocks.push(new Block());
  }

  for (let block of blocks){
    block.show();
    block.fall();
    collCheck = player.hits(block);
    if (collCheck === true) {
      console.log("PlayerCollisionDetected");
      player.setCoords(pCoords[0], pCoords[1]);
      //noLoop();
    }
  }

}


function remove(array, index) {
  array.splice(index, 1);
}


function onLoad() {
  
}