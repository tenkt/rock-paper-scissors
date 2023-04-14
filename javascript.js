
function getComputerChoice() {
    let myArray = ["rock", "paper", "scissors"];
    let randomChoice = myArray[Math.floor(Math.random() * 3)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        return "Tie!";
    } else if (playerSelection == "rock" && computerSelection == "scissors" ||
               playerSelection == "paper" && computerSelection == "rock" ||
               playerSelection == "scissors" && computerSelection == "paper") {
        return "Player wins! Computer Loses!";
    } else if (playerSelection == "rock" && computerSelection == "paper" ||
               playerSelection == "paper" && computerSelection == "scissors" ||
               playerSelection == "scissors" && computerSelection == "rock") {
        return "Computer wins! Player Loses!";
      }
}

function game() {
    const playerSelection = prompt("Input rock, paper or scissors.");
    const computerSelection = getComputerChoice();

    console.log(`Player throws: ${playerSelection}`);
    console.log(`Computer throws: ${computerSelection}`);    
    return playRound(playerSelection, computerSelection);
    
}


console.log(game());
console.log(game());
console.log(game());
console.log(game());
console.log(game());
