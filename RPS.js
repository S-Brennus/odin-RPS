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
 
/*
//prompt the user for input, if the user presses cancel - announce it and stop execution.

function getUserChoice() {
  userChoice = prompt("Rock, paper or scissors?");
  if (userChoice === null) {
    alert("You quit the game! Shame!");
    return 0;
  } else { 
    return userChoice;
  }
}


//keep prompting if the word entered does not match rock, paper or scissors
function checkIfValid() {
 while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
  getUserChoice();
 }
 }

*/

let playerScore = { //object with players
  user : 0,
  ai : 0
}

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
/*
let computerChoice;
let userChoice;
*/

/*
// the main loop, which includes all functions together. Loop for as long as it takes, until one side wins 3 times
while (playerScore.user !== 3 && playerScore.ai !== 3) {
  computerChoice = getComputerChoice();
  userChoice = getUserChoice().toLowerCase();
  checkIfValid();
  alert(round(userChoice, computerChoice));
  selectWinner();
} 

*/ 

//score and winner calculation and announcement





  const mainDiv = document.querySelector('.main');
  const winnerAnnounce = document.createElement('div');
  winnerAnnounce.style.cssText = 'text-align:center; color: white;'
  winnerAnnounce.classList.add('winner-announce');
  winnerAnnounce.textContent = "Press any button to play!";
  mainDiv.appendChild(winnerAnnounce);

  const score = document.createElement('div')
  score.classList.add('score');
  score.style.cssText = 'text-align:center; color: white;'
  score.textContent = 'Your score will be displayed here';
  mainDiv.appendChild(score);
  
  function roundWinner() {
    winnerAnnounce.textContent = round(userChoice, computerChoice);
    score.textContent = `Your score: ${playerScore.user}, AI score: ${playerScore.ai}`;
  }
  function gameResult() {
    if (playerScore.user === 3) {
      alert("You have won the game");
      location.reload();
    } else if (playerScore.ai === 3) {
      alert("Machines have taken over the world!");
      location.reload();
    }
  }
let userChoice;
let computerChoice;

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
