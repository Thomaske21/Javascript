let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",

    MOVE_DELAY: 500,

    score: 0,
    timeoutid: 0
}

const setup = () => {
    let button = document.getElementById("start");
    let target = document.getElementById("target");
    button.addEventListener("click",startgame)
    target.addEventListener("click",testBom);
}
const move = () => {
    let speelveld = document.getElementById("playField");
    let afbeelding = document.getElementById("target");
    let score = document.getElementById("score");
    score.textContent = global.score;
        afbeelding.setAttribute("src",global.IMAGE_PATH_PREFIX+Math.round(Math.random()*(global.IMAGE_COUNT-1))+global.IMAGE_PATH_SUFFIX);
        let maxLeft = speelveld.clientWidth - afbeelding.offsetWidth;
        let maxHeight = speelveld.clientHeight - afbeelding.offsetHeight;
        let left=Math.floor(Math.random()*maxLeft);
        let top=Math.floor(Math.random()*maxHeight);
        afbeelding.style.left=left+"px";
        afbeelding.style.top=top+"px";

}
const testBom = () => {
  let afbeelding = document.getElementById("target");
  if (afbeelding.getAttribute("src") === "images/0.png"){
      clearInterval(global.timeoutid);
      window.alert("game over");
  } else {
      clearInterval(global.timeoutid);
      global.score ++;
      move();
      global.timeoutid = setInterval(move,global.MOVE_DELAY);
  }
}
const startgame = () => {
  let removebtn = document.getElementById("start");
  global.timeoutid = setInterval(move,global.MOVE_DELAY);
  removebtn.remove();
}

window.addEventListener("load", setup);


