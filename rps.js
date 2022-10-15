const totalRounds = 5;
let numberOfRounds = "1";
let computerWins = 0;
let playerWins = 0;

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3)
    switch(randomChoice) {
        case 0:
            randomChoice = "Rock";
            break;
        case 1:
            randomChoice = "Paper";
            break;
        case 2:
            randomChoice = "Scissors";
            break;
    }
    return randomChoice;
}
function getPlayerChoice() {
    let PlayerSelection = prompt("Make your choice: Rock, Paper, or Scissors?");
    PlayerSelection = PlayerSelection.charAt(0).toUpperCase() + PlayerSelection.slice(1).toLowerCase()
    if (inputIsValid(PlayerSelection)) {
        return PlayerSelection
    } else {
        alert("Whoops. That's not a valid option")
        PlayerSelection = getPlayerChoice();
        return PlayerSelection;
    }
}

function inputIsValid(input) {
    if(input === "Rock" || input === "Paper" || input === "Scissors") {
        return true
    } else {
        return false;
    }
}

function lostRound(computerChoice, playerChoice) {
    alert(`You lose this round! ${computerChoice} beats ${playerChoice}.`)
    computerWins++;
}

function wonRound(computerChoice, playerChoice) {
    alert(`You win this round! ${playerChoice} beats ${computerChoice}.`)
    playerWins++;
}

function tieRound(computerChoice, playerChoice) {
    alert(`A Tie! You both picked ${computerChoice}.`)
}

function evaulateWinner(computerChoice, playerChoice) {
    if (computerChoice === "Rock") {
        switch(playerChoice) {
            case "Rock":
                tieRound(computerChoice, playerChoice);
                return "Tie";
            case "Paper":
                wonRound(computerChoice, playerChoice);
                return "Win"
            case "Scissors":
                lostRound(computerChoice, playerChoice);
                return "Loss"                
        }
    } else if (computerChoice === "Paper") {
        switch(playerChoice) {
            case "Paper":
                tieRound(computerChoice, playerChoice);
                return "Tie";
            case "Scissors":
                wonRound(computerChoice, playerChoice);
                return "Win"
            case "Rock":
                lostRound(computerChoice, playerChoice);
                return "Loss"                
        } 
    } else {
                switch(playerChoice) {
                    case "Scissors":
                        tieRound(computerChoice, playerChoice);
                        return "Tie";
                    case "Rock":
                        wonRound(computerChoice, playerChoice);
                        return "Win"
                    case "Paper":
                        lostRound(computerChoice, playerChoice);
                        return "Loss"                
                }
        }
    }

function commenceRound(numberOfRounds) {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    evaulateWinner(computerChoice, playerChoice);
} 

for (; numberOfRounds <= 5; numberOfRounds++ ) {
commenceRound();
alert(`Current Score: \nPlayer: ${playerWins}\nComputer ${computerWins}\n\n${numberOfRounds} out of ${totalRounds} played.`);
}

