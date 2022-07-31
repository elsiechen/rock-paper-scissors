// Keep asking player's choice if none of rock, paper, or scissors are chosen
let playerSelection;
do {
    playerSelection = prompt('Please choose between rock, paper, or scissors: ').toLowerCase();
    console.log(`playerSelection: ${playerSelection}`);
}
while((playerSelection !== 'rock') &&
      (playerSelection !== 'paper') &&
      (playerSelection !== 'scissors'));

// Get computer's choice 
let computerSelection = getComputerChoice();

// Play single round of game
playRound(playerSelection, computerSelection);


function getComputerChoice(){
    let array = ['Rock', 'Paper', 'Scissors'];
    let length = array.length;
    let randomIndex = Math.floor(Math.random()*length);
    let result = array[randomIndex];
    console.log(`getComputerChoice: ${result}`);
    return result;
}


function playRound(playerSelection, computerSelection){
    
    let result;
    if (playerSelection === computerSelection.toLowerCase()){
        result = 'You tied with computer for this round';
    } else if ((playerSelection === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
               (playerSelection === 'paper' && computerSelection.toLowerCase() === 'rock') ||
               (playerSelection === 'scissors' && computerSelection.toLowerCase() === 'paper')){
        result = `You won! ${playerSelection} beats ${computerSelection}`;
    } else {
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    console.log(`playerSelection: ${playerSelection}`);
    console.log(`computerSelection: ${computerSelection}`);
    console.log(`playRound: ${result}`);
    return result;
}
