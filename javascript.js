function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        return "Tie!";
    } else if (computerSelection == "scissors") {
        return "You win!";
    } else if (computerSelection == "paper") {
        return "You Lose!";
      }
}

function getComputerChoice() {
    let myArray = ["rock", "paper", "scissors"];
    let randomChoice = myArray[Math.floor(Math.random() * 3)];
    console.log(randomChoice);
    return randomChoice;
}

function game() {

}

const playerSelection = prompt("Input rock, paper or scissors.");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));