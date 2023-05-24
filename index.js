var userName;
var myMove;
var botMove;
var myScore = 0;
var botScore = 0;
var drawScore = 0;
var goalScore = 5;

const moves = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

function saveName() {
  userName = document.getElementById("name").value;
  hideIntroContainer();
}

function hideIntroContainer() {
  let intro = document.getElementById("introContainer");
  let main = document.getElementById("mainGame");
  let mySide = document.getElementById("mySide");
  let botSide = document.getElementById("botSide");
  let middle = document.getElementById("middle");
  intro.classList.remove("d-flex");
  intro.classList.add("d-none");
  main.classList.remove("d-none");
  main.classList.add("d-flex");
  mySide.classList.remove("d-none");
  mySide.classList.add("d-block");
  botSide.classList.remove("d-none");
  botSide.classList.add("d-block");
  middle.classList.remove("offset-md-4");
  alert(`Welcome ${userName}!`);
  document.getElementById("scoreBoardName").innerHTML = `${userName}`;
}

function makeMove(m) {
  myMove = moves[m];
  console.log(myMove);
  document.getElementById(
    "move"
  ).innerHTML = `<img src="assets/images/${m}.png" height="150" alt=""/>`;
}

function makeBotMove(m) {
  botAction = moves[m];
  console.log(botAction);
  document.getElementById(
    "botMove"
  ).innerHTML = `<img src="assets/images/${m}.png" height="150" alt=""/>`;
}

function play() {
  if (myMove == "") {
    return alert("Please pick a move");
  }
  const min = Math.floor(1);
  const max = Math.ceil(3);
  botMove = Math.floor(Math.random() * 3) + 1;

  let action = Object.keys(moves).find((move) => moves[move] == botMove);
  makeBotMove(action);

  switch (myMove) {
    case 1:
      if (botMove == 1) {
        drawScore += 1;
      } else if (botMove == 2) {
        botScore += 1;
      } else {
        myScore += 1;
      }
      break;
    case 2:
      if (botMove == 2) {
        drawScore += 1;
      } else if (botMove == 3) {
        botScore += 1;
      } else {
        myScore += 1;
      }
      break;
    case 3:
      if (botMove == 3) {
        drawScore += 1;
      } else if (botMove == 1) {
        botScore += 1;
      } else {
        myScore += 1;
      }
      break;
    default:
      alert("Pick your move");
  }
  myMove = "";
  document.getElementById("scoreBoardScore").innerHTML = `${myScore}`;
  document.getElementById("scoreBoardScoreBot").innerHTML = `${botScore}`;
  document.getElementById("scoreBoardDraw").innerHTML = `${drawScore}`;
  checkFinal(myScore, botScore);
}

function checkFinal(me, bot) {
  if (me == goalScore) {
    document.getElementById("winloss").innerHTML = `${userName} won!`;
    document.getElementById("gameOver").classList.remove("d-none");
  } else if (bot == goalScore) {
    document.getElementById("winloss").innerHTML = `Bot won!`;
    document.getElementById("gameOver").classList.remove("d-none");
  }
}
