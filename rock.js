document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    let resultDiv = document.querySelector('.result');
    let scorePDiv = document.querySelector('.scoreP');
    let scoreCDiv = document.querySelector('.scoreC');
    let scoreP = 0;
    let scoreC = 0;
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Get player's choice
            let playerSelection = button.value;

            // Get computer's choice 
            let computerSelection = getComputerChoice();

            // Play single round
            let result = playRound(playerSelection, computerSelection);
            resultDiv.textContent = result;
            // Set result color
            if (result.startsWith('won', 4)) resultDiv.style.color = 'gold';
            if (result.startsWith('lose', 4)) resultDiv.style.color = 'red';
            if (result.startsWith('tied', 4)) resultDiv.style.color = 'blue';

            // Calculate and update respective scores
            if (result.startsWith('won', 4)) {
                scoreP +=1;
                scorePDiv.textContent = `Score of Player: ${scoreP}`;
                console.log('scoreP', scoreP);
            } else if (result.startsWith('lose', 4)) {
                scoreC +=1;
                scoreCDiv.textContent = `Score of Computer: ${scoreC}`;
                console.log('scoreC', scoreC);
            }
            
            
            // Check if scores reach 5
            if(scoreP === 5){
                resultDiv.textContent = 'Congratulation! You have beaten computer!';
                resultDiv.classList.add('winner');
                buttons.forEach(button => button.disabled = true);
            } else if (scoreC === 5){
                resultDiv.textContent = 'Sorry! You have lost the game.';
                resultDiv.classList.add('loser');
                buttons.forEach(button => button.disabled = true);
            }
        })
    });

    


});


function getComputerChoice(){
    let array = ['Rock', 'Paper', 'Scissors'];
    let length = array.length;
    let randomIndex = Math.floor(Math.random()*length);
    let result = array[randomIndex];
    return result;
}


function playRound(playerSelection, computerSelection){   
    let result;
    // If player tie with computer
    if (playerSelection === computerSelection.toLowerCase()){
        result = 'You tied with computer for this round';
    // If player beats computer
    } else if ((playerSelection === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
               (playerSelection === 'paper' && computerSelection.toLowerCase() === 'rock') ||
               (playerSelection === 'scissors' && computerSelection.toLowerCase() === 'paper')){
        result = `You won! ${playerSelection} beats ${computerSelection}`;
    // If player lose computer
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
    // Play 5 rounds, and sum the scores
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
    // Compare scores between player and computer, then return the final result
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

