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
let computerChoice = getComputerChoice(); //store the option in a variable

//prompt the user for input and store it in a variable

function getUserChoice() {
  return userChoice = prompt("Rock, paper or scissors?");
}
userChoice = getUserChoice();

//make sure the entered word is correct, otherwise keep prompting for input. If user presses cancel - quit the game

 while (userChoice.toLowerCase() !== "rock" && userChoice.toLowerCase() !== "paper" && userChoice.toLowerCase() !== "scissors") {
  getUserChoice();
  if (userChoice === null) {
    alert("You quit the game!");
    break;
 }
 }
 


 function round(userChoice, computerChoice) {
  let info;
  if (userChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors") {
    info = "Rock beats scissors, you win!";
  } else if (userChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
    info = "Scissors beat paper, you win!";
  } else if (userChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") {
    info = "Paper beats rock, you win!";
  } else if (userChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper") {
    info = "Rock loses to paper, you lose!";
  } else if (userChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") {
    info = "Scissors lose to rock, you lose!";
  } else if (userChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors") {
    info = "Paper loses to scissors, you lose!"; 
  } else {
    info = "It's a tie!"
  }
  return info;
}

alert(round(userChoice, computerChoice));









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
