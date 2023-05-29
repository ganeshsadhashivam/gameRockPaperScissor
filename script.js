const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const gamesRules = document.getElementById("crossign");

const rulesSection = document.getElementById("game-rules");
// console.log(rulesSection);

const rulesText = document.getElementById("rules");
//all buttons

const allbuttons = document.querySelectorAll("img");

//lines

const lineOne = document.getElementById("line-box-1");
const lineTwo = document.getElementById("line-box-2");
const lineThree = document.getElementById("line-box-3");

//result
const resultWin = document.getElementById("result");
const movesLeft = document.getElementById("moves");

//selected button option message

const rockSelected = document.getElementById("rock-selected");
const paperSelected = document.getElementById("paper-selected");
const scissorSelected = document.getElementById("scissor-selected");

const rockSelectedTwo = document.getElementById("rock-selected-two");
const rockSelectedThree = document.getElementById("rock-selected-three");

//score updation
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
playerScore.innerText = 0;
computerScore.innerText = 0;

//playagain

const playAgain = document.getElementById("play-again");
const playAgainWinnerPage = document.getElementById("playAgain");

//next button

const nextButton = document.getElementById("next");
nextButton.style.display = "none";

//after winning by player
const totalContent = document.getElementById("total-content");
console.log(totalContent);

//moves
let moves = 10;

// for hiding the content in winner
const box = document.querySelector(".box-container");
const icons = document.querySelector(".icons-container");
const result = document.querySelector("#result");

//for play Again
const winnerPage = document.getElementById("winner-page");

//design
function playerOption(selectedOpt) {
  console.log(selectedOpt);
  if (selectedOpt === "rock") {
    rock.style.outline = "1px solid green";
    // rockSelectedTwo.style.outline = "1px solid lightgreen";

    rock.style.outlineWidth = "9px";

    rockSelected.textContent = "you Picked";
  } else if (selectedOpt === "scissor") {
    scissor.style.outline = "1px solid green";
    scissor.style.outlineWidth = "30px";
    scissorSelected.textContent = "you Picked";
  } else {
    paper.style.outline = "1px solid green";
    paper.style.outlineWidth = "30px";
    paperSelected.textContent = "you Picked";
  }
  setTimeout(() => {
    if (selectedOpt === "rock") {
      rock.style.outline = "none";
      rock.style.outlineWidth = "0px";
      rockSelected.textContent = null;
    } else if (selectedOpt === "scissor") {
      scissor.style.outline = "none";
      scissor.style.outlineWidth = "0px";
      scissorSelected.textContent = null;
    } else {
      paper.style.outline = "none";
      paper.style.outlineWidth = "0px";
      paperSelected.textContent = null;
    }
  }, 2500);
}

function computerOption(selectedOpt) {
  console.log("computer selected", selectedOpt);
  if (selectedOpt === "paper") {
    paper.style.outline = "1px solid green";
    paper.style.outlineWidth = "30px";
    paperSelected.textContent = "computer Picked";
  } else if (selectedOpt === "scissor") {
    scissor.style.outline = "1px solid green";
    scissor.style.outlineWidth = "30px";
    scissorSelected.textContent = "computer Picked";
  } else {
    rock.style.outline = "1px solid green";
    rock.style.outlineWidth = "30px";
    rockSelected.textContent = "computer Picked";
  }
  setTimeout(() => {
    if (selectedOpt === "rock") {
      rock.style.outline = "none";
      rock.style.outlineWidth = "0px";
      rockSelected.textContent = null;
    } else if (selectedOpt === "scissor") {
      scissor.style.outline = "none";
      scissor.style.outlineWidth = "0px";
      scissorSelected.textContent = null;
    } else {
      paper.style.outline = "none";
      paper.style.outlineWidth = "0px";
      paperSelected.textContent = null;
    }
  }, 2500);
}

//Player

function player(Event) {
  lineOne.style.display = "none";
  lineTwo.style.display = "none";
  lineThree.style.display = "none";
  // console.log(Event.target.alt);

  let playerSelected = "";
  playerSelected = Event.target.alt;
  playerOption(playerSelected);
  console.log("playerselected", playerSelected);
  const char = false;
  moves--;
  computer(playerSelected);
}

//computer

function computer(playerSelected) {
  // const randomNumber = Math.floor((Math.random() * 10) / 4);
  const randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);
  const computerSelected = allbuttons[randomNumber].alt;
  console.log("computerselected", computerSelected);
  computerOption(computerSelected);
  moves--;
  checkSelectedButtons(playerSelected, computerSelected);
}

//comparing the buttons selected

let playerscore = 0;
let computerscore = 0;
function checkSelectedButtons(playerSelected, computerSelected) {
  console.log(playerSelected, computerSelected);

  if (moves === 0) {
    movesLeft.textContent = "gameOver";
    winner();
  } else {
    movesLeft.textContent += moves;
  }
  if (playerSelected !== computerSelected) {
    console.log("playerSelected !== computerSelected");
    console.log(playerSelected !== computerSelected);
    if (playerSelected === "rock" && computerSelected === "paper") {
      computerScore.innerHTML = ++computerscore;
    } else if (playerSelected === "paper" && computerSelected === "rock") {
      playerScore.innerHTML = ++playerscore;
    } else if (playerSelected === "paper" && computerSelected === "scissor") {
      computerScore.innerHTML = ++computerscore;
    } else if (playerSelected === "scissor" && computerSelected === "paper") {
      playerScore.innerHTML = ++playerscore;
    } else if (playerSelected === "scissor" && computerSelected === "rock") {
      computerScore.innerHTML = ++computerscore;
    } else if (playerSelected === "rock" && computerSelected === "scissor") {
      playerScore.innerHTML = ++playerscore;
    }
  } else if (playerSelected === computerSelected) {
    console.log("elseif");
    console.log(playerSelected, computerSelected);
    if (playerSelected === computerSelected && "rock") {
      rock.style.outline = "1px solid green";
      rock.style.outlineWidth = "30px";
      rockSelected.textContent = "You And Computer Picked Same";
    } else if (playerSelected === computerSelected && "paper") {
      paper.style.outline = "1px solid green";
      paper.style.outlineWidth = "30px";
      paperSelected.textContent = "You And Computer Picked Same";
    } else {
      scissor.style.outline = "1px solid green";
      scissor.style.outlineWidth = "30px";
      scissorSelected.textContent = "You And Computer Picked Same";
    }
  }
}

//winner
function winner() {
  console.log(playerscore, computerscore);
  if (playerscore > computerscore) {
    resultWin.textContent = "You Won !";
    nextButton.style.display = "inline";
    // playerWon();
  } else if (playerscore < computerscore) {
    resultWin.textContent = "Computer Won !";
    playAgain.style.display = "inline";
  } else if (playerscore === computerscore) {
    resultWin.textContent = "Match Tie";
    playAgain.style.display = "inline";
  }
}

//hiderules

function hideRules() {
  rulesSection.style.display = "none";
  gamesRules.style.display = "none";
}

//show Rules
function showRules() {
  rulesSection.style.display = "inline";
  gamesRules.style.display = "inline";
}

//player won
function playerWon() {
  // const images = [
  //   "Star 1.png",
  //   "Star 2.png",
  //   "Star 3.png",
  //   "Star 4.png",
  //   "Star 5.png",
  //   "Star 6.png",
  //   "Star 7.png",
  //   "Star 9.png",
  // ];
  // totalContent.style.display = "none";
  box.style.display = "none";
  icons.style.display = "none";
  result.style.display = "none";
  nextButton.style.display = "none";

  const section = document.getElementById("winner-page");
  const img = document.createElement("img");
  img.src = "./Vector (3).png";
  img.alt = "cup";
  img.id = "cup";
  section.appendChild(img);
  // images.map((img, index) => {
  //   let image = document.createElement("img");
  //   image.src = `${img}`;
  //   image.alt = "stars";
  //   section.appendChild(image);
  //   document.appendChild(section);
  // });
  let star1 = document.createElement("img");
  star1.src = "./Star 1.png";
  star1.alt = "stars";
  star1.id = "star1";
  section.appendChild(star1);
  let star2 = document.createElement("img");
  star2.src = "./Star 2.png";
  star2.alt = "stars";
  star2.id = "star2";
  section.appendChild(star2);
  let star3 = document.createElement("img");
  star3.src = "./Star 3.png";
  star3.alt = "stars";
  star3.id = "star3";
  let star4 = document.createElement("img");
  star4.src = "./Star 4.png";
  star4.alt = "stars";
  star4.id = "star4";
  section.appendChild(star4);
  let star5 = document.createElement("img");
  star5.src = "./Star 5.png";
  star5.alt = "stars";
  star5.id = "star5";
  section.appendChild(star5);
  let star6 = document.createElement("img");
  star6.src = "./Star 6.png";
  star6.alt = "stars";
  star6.id = "star6";
  section.appendChild(star6);
  let star7 = document.createElement("img");
  star7.src = "./Star 7.png";
  star7.alt = "stars";
  star7.id = "star7";
  section.appendChild(star7);
  let star9 = document.createElement("img");
  star9.src = "./Star 9.png";
  star9.alt = "stars";
  star9.id = "star9";
  section.appendChild(star9);
  let h1 = document.createElement("h1");
  h1.innerText = "HURRAY!!";
  h1.id = "hurray";
  section.appendChild(h1);
  let h4 = document.createElement("h4");
  h4.innerText = "YOU WON THE GAME";
  h4.id = "youWon";
  section.appendChild(h4);
  let button = document.createElement("button");
  button.innerText = "PLAY AGAIN";
  button.id = "playAgain";
  section.appendChild(button);
}

//game Reset Replay playAgain

function resetGame() {
  console.log("reset");
  lineOne.style.display = "inline";
  lineTwo.style.display = "inline";
  lineThree.style.display = "inline";
  playAgain.style.display = "none";
  result.style.display = "none";
  computerScore.innerText = 0;
  playerScore.innerText = 0;
  result.innerText = 0;
  playerscore = 0;
  computerscore = 0;
  moves.textContent = null;
  moves = 0;

  // winnerPage.style.display = "none";
  // totalContent.style.display = "inline";
}

rock.addEventListener("click", player);
paper.addEventListener("click", player);
scissor.addEventListener("click", player);
gamesRules.addEventListener("click", hideRules);
rulesText.addEventListener("click", showRules);
nextButton.addEventListener("click", playerWon);
playAgain.addEventListener("click", resetGame);
// playAgainWinnerPage.addEventListener("click", resetGame);
