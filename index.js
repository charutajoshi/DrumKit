var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var crashAudio = new Audio("sounds/crash.mp3");
var kickAudio = new Audio("sounds/kick-bass.mp3");
var snareAudio = new Audio("sounds/snare.mp3");
var tom1Audio = new Audio("sounds/tom-1.mp3");
var tom2Audio = new Audio("sounds/tom-2.mp3");
var tom3Audio = new Audio("sounds/tom-3.mp3");
var tom4Audio = new Audio("sounds/tom-4.mp3");
var instruments = document.querySelectorAll(".drum");

// Detecting button clicks
for (var i = 0; i < numberOfDrumButtons; i++) {
  instruments[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    playInstrument(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting keyboard presses
document.addEventListener("keydown", function(event) {
  playInstrument(event.key);
  buttonAnimation(event.key);
});

function playInstrument(key) {
  switch (key) {
    case "w":
      var audio = crashAudio;
      break;
    case "a":
      var audio = kickAudio;
      break;
    case "s":
      var audio = snareAudio;
      break;
    case "d":
      var audio = tom1Audio;
      break;
    case "j":
      var audio = tom2Audio;
      break;
    case "k":
      var audio = tom3Audio;
      break;
    case "l":
      var audio = tom4Audio;
      break;
  }
  audio.play();
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
