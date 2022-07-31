function getComputerChoice(){
    let array = ['Rock', 'Paper', 'Scissors'];
    let length = array.length;
    let randomIndex = Math.floor(Math.random()*length);
    let result = array[randomIndex];
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

function game(){
    let scoreP = 0;
    let scoreC = 0;
    let text;
    for (let i = 0; i< 5; i++){
        // Keep asking player's choice if none of rock, paper, or scissors are chosen
        let playerSelection;
        do {
            playerSelection = prompt('Please choose between rock, paper, or scissors: ').toLowerCase();
        }
        while((playerSelection !== 'rock') &&
            (playerSelection !== 'paper') &&
            (playerSelection !== 'scissors'));

        // Get computer's choice 
        let computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);
        // Calculate respective scores of player and computer in 5 rounds
        if (result.startsWith('won', 4)) scoreP +=1;
        if (result.startsWith('lose', 4)) scoreC +=1;
        console.log(`round ${i+1}`);
        console.log(`scoreP: ${scoreP}`);
        console.log(`scoreC: ${scoreC}`);
    }
    if (scoreP > scoreC ){
        text = 'Congratulation! You have beaten computer in 5 rounds of rock-paper-scissors.';
    } else if (scoreP < scoreC){
        text = 'Sorry! You have lost the game.'
    } else {
        text = 'Oops! You have tied with computer in 5 rounds of rock-paper-scissors.'
    }
    console.log(text);
    return text;
    
}

game();