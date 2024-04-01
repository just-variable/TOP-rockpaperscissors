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
        return 0;
    }

    if(rules[userChoice] == computerChoice){
        return 1;
    } else {
        return -1;
    }

}

function playGame(){
    // for(let i=0; i<5; i++){
        let userChoice = prompt("Rock/Paper/Scissors?");
        console.log(playRound(userChoice.toLowerCase(), getComputerChoice()));
    // }
    
}
// playGame();

let RPSbuttons = document.querySelectorAll("body button")

let userScore = document.querySelector(".user-score");
let computerScore = document.querySelector(".computer-score");

RPSbuttons.forEach(b => {
    b.addEventListener("click", (e) => {
        switch (playRound(e.target.textContent.toLowerCase(), getComputerChoice())){
            case 1:
                userScore.textContent++;
                break;
            case -1:
                computerScore.textContent++;
                break;
            case 0:
                console.log("tie");
                break;
        }
    })
})
