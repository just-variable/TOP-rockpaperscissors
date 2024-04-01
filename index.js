function getComputerChoice(){
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*3)];
}

function playRound(userChoice, computerChoice){
    let rules = {
        "scissors": "paper",
        "paper": "rock",
        "rock": "scissors"
    }

    if(userChoice == computerChoice){
        return `It's a tie!`;
    }

    if(rules[userChoice] == computerChoice){
        return `You win, ${userChoice} beats ${computerChoice}`;
    } else {
        return `You lose, ${computerChoice} beats ${userChoice}`;
    }

}

function playGame(){
    for(let i=0; i<5; i++){
        let userChoice = prompt("Rock/Paper/Scissors?");
        console.log(playRound(userChoice.toLowerCase(), getComputerChoice()));
    }
    
}
playGame();
