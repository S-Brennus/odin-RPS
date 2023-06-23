// function to generate computer option

function getComputerChoice() {
  let computerOption;
  let randomNumber = Math.floor(Math.random() * 3 + 1); //randomly generate a number from 1 to 3
    if (randomNumber === 1) { //assign generated number to a certain option - either rock, paper or scissors
     computerOption = "Rock";
    } else if (randomNumber === 2) {
     computerOption = "Paper";
    } else {
     computerOption = "Scissors";
    }
    return computerOption; //return the choice, can be stored in a variable later
}
 

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


//make sure the entered word is correct, otherwise keep prompting for input. If user presses cancel - quit the game
function checkIfValid() {
 while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
  getUserChoice();
 }
 }


 function round(userChoice, computerChoice) {
  let info;
  if (userChoice === "rock" && computerChoice === "scissors") {
    info = "Rock beats scissors, you win!";
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    info = "Scissors beat paper, you win!";
  } else if (userChoice === "paper" && computerChoice === "rock") {
    info = "Paper beats rock, you win!";
  } else if (userChoice === "rock" && computerChoice === "paper") {
    info = "Rock loses to paper, you lose!";
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    info = "Scissors lose to rock, you lose!";
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    info = "Paper loses to scissors, you lose!"; 
  } else { 
    info = "It's a tie!"
  }
  return info;
}

let computerChoice;
let userChoice;

let playerScore = { //could have done it with just regular values, no object creation was necessary
  user : 0,
  ai : 0
}

function selectWinner() { //calculate score after the round is over
 
  if (round(userChoice, computerChoice).match("win")) {
    playerScore.user++;
  } else if (round(userChoice, computerChoice).match("lose")) {
    playerScore.ai++;
  }
  return;
}

// the main which includes all functions together. Loop for as long as it takes, until one side is a winner 3 times
while (playerScore.user !== 3 && playerScore.ai !== 3) {
  computerChoice = getComputerChoice().toLowerCase();
  userChoice = getUserChoice().toLowerCase();
  checkIfValid();
  alert(round(userChoice, computerChoice));
  selectWinner();
} 

//score and winner calculation and announcement
alert (`Your score is ${playerScore.user}, computer's score is ${playerScore.ai}`);
if (playerScore.user === 3) {
  alert("Victory!")
  } else if (playerScore.ai === 3) {
    alert("Defeat!")
  } else {
    alert("It's a tie! Play again!")     
  }







/*

  localeCompare messing around

 //example
const areEqual = string1.localeCompare(string2, undefined, {
  sensitivity: 'base' })

const comparisonResult = testOption.localeCompare(myOption, undefined, { sensitivity: 'base' });
While (comparisonResult !== 0) {
  prompt("You are a pirate!");
}
console.log(comparisonResult);

*/
