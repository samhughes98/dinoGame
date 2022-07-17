var dino = document.getElementById("dino");
var cactus = document.getElementById("cactus");

var flag = true;

var slideshowSrc = ["./sprites/dino_run2.png", "./sprites/dino_run1.png"];

var curIndex = 0;
var spriteStop = false;

function slideShow() {
  dino.src = slideshowSrc[curIndex];
  curIndex++;
  if (curIndex == slideshowSrc.length) {
    curIndex = 0;
  }
  setTimeout("slideShow()", 100);
}
if (spriteStop === false) {
  slideShow();
}

document.body.onkeydown = function (e) {
  if (e.keyCode == 32) {
    if (e.repeat) {
      return;
    }
    if (dino.style.bottom == 0) {
      dino.style.animation = "jump 1s";
      flag = true;
    }
    setTimeout(() => {
      dino.style.animation = "none";
    }, 1000);
  }
};

var points = 0;

let AddScore = () => {
  var score = document.getElementById("scoreNum");
  points += 10;
  score.innerHTML = points;
  flag = false;
};

let isAlive = setInterval(function () {
  let dinoTop = parseInt(
    window.getComputedStyle(dino).getPropertyValue("bottom")
  );

  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < 5 && cactusLeft > 0 && dinoTop <= 130) {
    spriteStop = true;
    slideshowSrc = ["./sprites/dino_dead.png", "./sprites/dino_dead.png"];
    console.log("dead");

    document.getElementById("scoreValue").innerHTML =
      "You died! Your score was: " + points;
    document.getElementById("startBtn").style.display = 'block'
    score.style.display = "none";
    cactus.style.animationPlayState = "paused";

  }

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 130 && flag) {
    console.log(dinoTop);
    AddScore();
    if(cactusLeft < 30){
    if(points >= 10){
        cactus.style.animation = 'cactus-move 2s linear infinite';
    }
    
    if(points >= 50){
        cactus.style.animation = 'cactus-move 2s linear infinite';
    }
    
    if(points >= 100){
        cactus.style.animation = 'cactus-move 1s linear infinite';
    }
}
  }
});

function reload(){
    document.location.reload(true);
}
