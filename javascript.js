let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
const computerSelection = getComputerChoice();
playerSelection = buttons;

function getComputerChoice() {
    const myArray = ["rock", "paper", "scissors"];
    console.log(myArray);
    return myArray[Math.floor(Math.random() * 3)];
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id);
        return playRound(button.id, computerSelection);
      });
    });

function playRound(playerSelection, computerSelection) {
    console.log(`Player throws: ${playerSelection}`);
    console.log(`Computer throws: ${computerSelection}`); 
  
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