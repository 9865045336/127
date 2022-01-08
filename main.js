peter_pan_song = "";
Harry_Potter_theme_song = "";

function setup() {
    canvas = createCanvas(600, 530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function dreaw() {
    image(video, 0, 0, 600, 500);
}

function preload() {
    peter_pan_song = loudSound("music2.mp3");
    Harry_Potter_theme_song = loudSound("music.mp3");
}