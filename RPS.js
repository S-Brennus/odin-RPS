//declarations
let userChoice;
let computerChoice;

let playerScore = { //playerscore tracker
  user : 0,
  ai : 0
}

const mainDiv = document.querySelector('.main');
const bodySelector = document.querySelector('body');
const playRound = document.querySelector('.play');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const buttons = document.querySelector('.buttons');
const score = document.querySelector('.score');
const reset = document.querySelector('.reset');

// function to generate computer option
function getComputerChoice() {
  let computerChoice;
  let randomNumber = Math.floor(Math.random() * 3 + 1); //randomly generate a number from 1 to 3
    if (randomNumber === 1) { //assign generated number to a certain option - either rock, paper or scissors
     computerChoice = "rock";
    } else if (randomNumber === 2) {
     computerChoice = "paper";
    } else {
     computerChoice = "scissors";
    }
    return computerChoice; //return the choice, can be stored in a variable later
}
 
//provides both info and updates the score
 function round(userChoice, computerChoice) {
  let info;
  if (userChoice === "rock" && computerChoice === "scissors") {
    info = "Rock beats scissors, you win!";
    ++playerScore.user;
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    info = "Scissors beat paper, you win!";
    ++playerScore.user;
  } else if (userChoice === "paper" && computerChoice === "rock") {
    info = "Paper beats rock, you win!";
    ++playerScore.user;
  } else if (userChoice === "rock" && computerChoice === "paper") {
    info = "Rock loses to paper, you lose!";
    ++playerScore.ai;
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    info = "Scissors lose to rock, you lose!";
    ++playerScore.ai;
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    info = "Paper loses to scissors, you lose!"; 
    ++playerScore.ai;
  } else { 
    info = "It's a tie!"
  }
  return info;
}

  function roundWinner() {
    playRound.textContent = round(userChoice, computerChoice);
    if (score.style.display === "none") {
      score.style.display = "initial";
    }
    score.textContent = `Your score: ${playerScore.user}, AI score: ${playerScore.ai}`;
  }

  function victory() {
    h1.textContent = "Victory!";
    h2.textContent = "Evil machines are beaten";
    buttons.style.display = "none";
    mainDiv.style.display = "none";
    restart.style.display = "none";
    reload();
  }

  function defeat() {
    h1.textContent = "Defeat!";
    h2.textContent = "Evil machines have taken over the world!";
    buttons.style.display = "none";
    mainDiv.style.display = "none";
    restart.style.display = "none";
    reload();
  }

  function gameResult() {
    if (playerScore.user === 5) {
     victory();
    } else if (playerScore.ai === 5) {
     defeat();
    }
  }
//adds a reload button after victory and defeat, reloads the page
  function reload() {
    const reload = document.createElement("button");
    reload.textContent = "Play again?";
    reset.appendChild(reload);
    reload.addEventListener('click', () => {
     location.reload();
    })
  }


const rockBtn = document.querySelector('.rock');
rockBtn.addEventListener('click', () => {
  userChoice = "rock";
  computerChoice = getComputerChoice();
  roundWinner();
  gameResult();
  });

const paperBtn = document.querySelector('.paper');
paperBtn.addEventListener('click', () => {
  userChoice = "paper";
  computerChoice = getComputerChoice();
  roundWinner();
  gameResult();
});

const scissorsBtn = document.querySelector('.scissors');
scissorsBtn.addEventListener('click', () => {
  userChoice = "scissors";
  computerChoice = getComputerChoice();
  roundWinner();
  gameResult();
});

//restart button
const restart = document.querySelector('.restart');
restart.addEventListener('click', () => {
  playerScore.user = 0;
  playerScore.ai = 0;
  playRound.textContent = "Press any button to play!";
  score.style.display = "none";
});
