
var audio
$("#green").click(function () {
    audio = new Audio('./sounds/green.mp3');
    audio.play();
    $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
})
$("#yellow").click(function () {
    audio = new Audio('./sounds/yellow.mp3');
    audio.play();
    $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
})
$("#blue").click(function () {
    audio = new Audio('./sounds/blue.mp3');
    audio.play();
    $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
})
$("#red").click(function () {
    audio = new Audio('./sounds/red.mp3');
    audio.play();
    $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
})

let buttonColours = ["red", "blue", "green", "yellow"]
let gamePattern = [];


function nextSequence() {

    let randomNumnber = Math.floor(Math.random() * 3);;

    let randomChosenColour = buttonColours[randomNumber];


    gamePattern.push(randomChosenColour);

}