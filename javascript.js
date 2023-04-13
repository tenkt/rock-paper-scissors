function playRound(playerSelection, computerSelection) {
    // your code here!
}

function getComputerChoice() {
    let myArray = ["Rock", "Paper", "Scissor"];
    let randomChoice = myArray[Math.floor(Math.random() * 3)];
    alert (randomChoice);
}
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));