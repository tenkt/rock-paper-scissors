let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let myArray = ["rock", "paper", "scissors"];
    let randomChoice = myArray[Math.floor(Math.random() * 3)];
    return randomChoice;
}
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id);
        return game();
      });
    });
   // console.log(document.querySelectorAll('button'));

function playRound(playerSelection, computerSelection) {    
    if (computerSelection == playerSelection) {
        console.log("Player " + playerScore + " " + "|" + " " + "Computer " + computerScore);
        return "Tie!";
    } else if (playerSelection == "rock" && computerSelection == "scissors" ||
               playerSelection == "paper" && computerSelection == "rock" ||
               playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++
        console.log("Player " + playerScore + " " + "|" + " " + "Computer " + computerScore);       
        return "Player wins this round!";
    } else if (playerSelection == "rock" && computerSelection == "paper" ||
               playerSelection == "paper" && computerSelection == "scissors" ||
               playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++
        console.log("Player " + playerScore + " " + "|" + " " + "Computer " + computerScore);
        return "Computer wins this round!";
    }
}
//console.log(playRound());

function game() {
    const computerSelection = getComputerChoice();
    let playerSelection = buttons;
    //prompt("Input rock, paper or scissors.").toLowerCase();
    //const computerSelection = getComputerChoice();
   console.log(`Player throws: ${playerSelection}`);
   console.log(`Computer throws: ${computerSelection}`); 
   return playRound(playerSelection, computerSelection);
    }

    

//function gameResult() {
   // if (playerScore > computerScore) {
   //     return "You won!";
   // } else if (playerScore < computerScore) {
   //     return "Computer Won!";
   // } else if (playerScore == computerScore) {
  //      return "Tie!";
 //   }   
//}

//console.log(game());
//console.log("Total Score:  Player " + playerScore + " " + "|" + " " + "Computer " + computerScore);
//console.log(gameResult());