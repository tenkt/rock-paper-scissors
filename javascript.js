let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
const computerSelection = getComputerChoice();
playerSelection = buttons;
const p = document.createElement('p')


function getComputerChoice() {
    const myArray = ["rock", "paper", "scissors"];
    return myArray[Math.floor(Math.random() * 3)];
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        return playRound(button.id, getComputerChoice());
      });
    });

function playRound(playerSelection, computerSelection) {
    console.log(`Player throws: ${playerSelection}`);
    console.log(`Computer throws: ${computerSelection}`); 
    if (computerSelection == playerSelection) {
        p.innerText = `Player throws: ${playerSelection} 
                       Computer throws: ${computerSelection}

                       Player ${playerScore} | Computer ${computerScore}
                       Tie!`;
        results.appendChild(p);
    } else if (playerSelection == "rock" && computerSelection == "scissors" ||
               playerSelection == "paper" && computerSelection == "rock" ||
               playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++
        p.innerText = `Player throws: ${playerSelection} 
                       Computer throws: ${computerSelection}

                       Player ${playerScore} | Computer ${computerScore}
                       Player wins this round!`;
        results.appendChild(p);
    } else if (playerSelection == "rock" && computerSelection == "paper" ||
               playerSelection == "paper" && computerSelection == "scissors" ||
               playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++
        p.innerText = `Player throws: ${playerSelection} 
                       Computer throws: ${computerSelection}
                       
                       Player ${playerScore} | Computer ${computerScore}
                       Computer wins this round!`;
        results.appendChild(p);
    }
}
