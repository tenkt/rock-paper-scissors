function playRound(playerSelection, computerSelection) {
    console.log(`Player throws: ${playerSelection}`);
    if (computerSelection == playerSelection) {
        return "Tie!";
    } else if (playerSelection == "rock" && computerSelection == "scissors" ||
               playerSelection == "paper" && computerSelection == "rock" ||
               playerSelection == "scissors" && computerSelection == "paper") {
        return "You win!";
    } else if (playerSelection == "rock" && computerSelection == "paper" ||
               playerSelection == "paper" && computerSelection == "scissors" ||
               playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose!";
      }
}

function getComputerChoice() {
    let myArray = ["rock", "paper", "scissors"];
    let randomChoice = myArray[Math.floor(Math.random() * 3)];
    console.log(`Computer throws: ${randomChoice}`);
    return randomChoice;
}

function game() {

}

const playerSelection = prompt("Input rock, paper or scissors.");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));