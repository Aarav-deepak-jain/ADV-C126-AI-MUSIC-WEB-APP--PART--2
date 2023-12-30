song_1 = "";
song_2 = "";

function preload(){
    song_1 = loadSound("music_1.mp3");
    song_2 = loadSound("music_2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
   
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play() {
    song_1.play();
}