let player;
let block;
let collCheck = false;
let pCoords;

let video;
//let poseNet;
//let pose;
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
  console.log(pCoords);
  console.log(flippedVideo);
}

// function keyPressed() {
//   console.log("pressed");
//   player.move();
// }

function gotPoses(poses) {
  //console.log(poses);
  //console.log(poses[0].pose.nose.x);
  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}

function modelLoaded() {
  console.log('poseNet ready');
}

function draw() {
  //let user = image(video, 0 ,0);
  background(220);
  //flippedVideo = ml5.flipImage(video);
  player.show();
  // if (pose) {
  //   fill(255,0,0);
  //   ellipse(pose.nose.x, pose.nose.y, 64);
  // }

  pCoords = player.getCoords();
  player.move();
  block.show();
  collCheck = player.hits(block);
  if (collCheck === true) {
    console.log("collisionDetected");
    player.setCoords(pCoords[0], pCoords[1]);
  }
}
