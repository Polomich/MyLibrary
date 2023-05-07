const clickables = document.getElementsByClassName('clickable');
const hides = document.getElementsByClassName('hide');
let clicked = false;
const audio = new Audio("resources/lofi.mp3");
let play = false;

function createEvents() {
  for (let i = 0; i < clickables.length; i++) {
    clickables[i].addEventListener("click", unhidePopup);
  }
  document.getElementById("click-HT").addEventListener("click", function() {
    open("HT");
  });
  document.getElementById("click-IW").addEventListener("click", function() {
    open("IW");
  });
  document.getElementById("click-Sims").addEventListener("click", function() {
    open("Sims");
  });
  document.getElementById("click-OLS").addEventListener("click", function() {
    open("OLS");
  });
  document.getElementById("click-CTN").addEventListener("click", function() {
    open("CTN");
  });
  document.getElementById("click-MPC").addEventListener("click", function() {
    open("MPC");
  });
  document.getElementById("click-MPL").addEventListener("click", function() {
    open("MPL");
  });
  document.getElementById("flower").addEventListener("click", function() {
    open("bees");
  });
  for (let i = 0; i < hides.length; i++) {
    hides[i].style.visibility = 'hidden';
  }
  document.getElementById('boombox').addEventListener("click", playSound);
}

function unhidePopup() {
  if (clicked == false) {
    document.getElementById('popup').style.visibility = 'visible';
    clicked = true;
  } else {
    document.getElementById('popup').style.visibility = 'hidden';
    for (let i = 0; i < hides.length; i++) {
      hides[i].style.visibility = 'hidden';
    }
    clicked = false;
  }
}

function open(name) {
  for (let i = 0; i < hides.length; i++) {
    hides[i].style.visibility = 'hidden';
  }
  document.getElementById(name).style.visibility = 'visible';
}

function playSound() {
  if (play) {
    audio.pause();
    play = false;
  } else {
    audio.play();
    play = true;
  }
}