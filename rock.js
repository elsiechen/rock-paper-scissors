function getComputerChoice(){
    let array = ['Rock', 'Paper', 'Scissors'];
    let length = array.length;
    let randomIndex = Math.floor(Math.random()*length);
    let result = array[randomIndex];
    console.log(`getComputerChoice: ${result}`);
    return result;
}

getComputerChoice();
