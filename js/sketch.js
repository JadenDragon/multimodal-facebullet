let player;
let block;
let collCheck = false;
let pCoords;
let bullets = [];
let blocks = [];
let counter = 0;
let gameOver = false;
let fallSpeed = 0.007;

let video;
let flippedVideo;

// let startAudio = new Audio("sound/science_fiction_machine_object_obliterate.mp3 ");
// let audio = new Audio("sound/thunder.mp3");
// let explosion = new Audio("sound/zapsplat_explosions_short_small_explosion_no_tail_003_62730.mp3");

// Global variable to store the classifier
let classifier;

// Label
let label = 'listening...';

// Teachable Machine model URL:
let soundModel = 'https://teachablemachine.withgoogle.com/models/KlSpA6qhd/';


function preload() {
    // Load the model
    classifier = ml5.soundClassifier(soundModel + 'model.json');

}

// function loaded() {
//   sound.play();
// }

function setup() {
    createCanvas(600, 600);
    video = createCapture(VIDEO);
    video.hide();
    //flippedVideo = ml5.flipImage(video);
    //startAudio.play();
    //audio.play();
    //audio.volume = 0.12;

    poseNet = ml5.poseNet(video, {
        //flipHorizontal:true
    }, modelLoaded);
    poseNet.on('pose', gotPoses);

    // Start classifying
    // The sound model will continuously listen to the microphone
    classifier.classify(gotResult);

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
    //player.shoot();


    for (let index = 0; index < bullets.length; index++) {
        let bullet = bullets[index];
        bullet.show();
        if (bullet.onHit(block)) {
            //remove(bullets, index);
            //bullet.visible = false;
            bullet.change();
            //explosion.play();
            console.log("DED bullet!");
        }
    }

    if (random(1) < fallSpeed) {
        blocks.push(new Block());
    }

    blocks.forEach(function(block, i) {
        block.show();
        block.fall();
        //console.log(block.y);
        collCheck = player.hits(block);
        if (collCheck === true) {
            console.log("PlayerCollisionDetected");
            player.setCoords(pCoords[0], pCoords[1]);
            noLoop();
            gameOver === true;
            //checkGame();
        }
    })

    // Draw the label in the canvas
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(label, width / 2, height / 2);

}

// The model recognizing a sound will trigger this event
function gotResult(error, results) {
    if (error) {
        console.error(error);
        return;
    }
    // The results are in an array ordered by confidence.
    // console.log(results[0]);
    label = results[0].label;

    if (label === 'Clap') {
        player.shoot();
    } 
    // else if (label === 'Start') { //say GO to reset
    //     window.location.reload();
    //     console.log("RESTART!");
    //     checkGame();
    // }
}


function remove(array, index) {
    array.splice(index, 1);
}

//restarts game on CLAP
// function checkGame() {
//     if (gameOver == true) {
//         window.location.reload();
//         console.log("YOU DIED!");
//     }
// }

// function onLoad() {

// }