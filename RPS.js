// function to generate computer option

function getComputerChoice() {
  let computerOption;
  let randomNumber = Math.floor(Math.random() * 3 + 1); //randomly generate a number from 1 to 3
    if (randomNumber === 1) { //assign generated number to a certain option
     computerOption = "Rock";
    } else if (randomNumber === 2) {
     computerOption = "Paper";
    } else {
     computerOption = "Scissors";
    }
    return computerOption; 
}
 //store the option in a variable, make it lower case for easy comparisons

//prompt the user for input and store it in a variable

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
    info = "Same!"
  }
  return info;
}

let computerChoice;
let userChoice;
let score = 0;

function selectWinner() {
  if (round(userChoice, computerChoice).match("win")) {
    score++;
  } else if (round(userChoice, computerChoice).match("lose")) {
    score--;
  }
  return score;
}

// loop 5 times to play 5 rounds of the game
for (let i = 0; i <= 4; i++) {
  computerChoice = getComputerChoice().toLowerCase();
  userChoice = getUserChoice().toLowerCase();
  checkIfValid();
  alert(round(userChoice, computerChoice));
  selectWinner();
} 

//score and winner calculation and announcement
alert (`Your score is ${score}`);
if (score > 0) {
  alert("You won the game, congratulations!")
  } else if (score < 0) {
    alert("Unfortunately you lost, try again")
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
