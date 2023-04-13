function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        return "Tie!";
    } else if (computerSelection == "scissor") {
        return "You win!";
    } else if (computerSelection == "paper") {
        return "You Lose!";
      }
}

function getComputerChoice() {
    let myArray = ["rock", "paper", "scissor"];
    let randomChoice = myArray[Math.floor(Math.random() * 3)];
    console.log(randomChoice);
    return randomChoice;
}
 
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));