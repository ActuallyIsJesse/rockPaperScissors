const totalRounds = 5;
let computerWins = 0;
let playerWins = 0;
let noWinner = false;

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
    let playerSelection = prompt("Make your choice: Rock, Paper, or Scissors?");
    if(playerSelection === null) {
        alert(`You've got to pick something!`);
        playerSelection = getPlayerChoice();
        return playerSelection;
    }
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (inputIsValid(playerSelection)) {
        return playerSelection;
    } else {
        alert("Whoops. That's not a valid option")
        playerSelection = getPlayerChoice();
        return playerSelection;
    }
}

function inputIsValid(input) {
    if(input === "Rock" || input === "Paper" || input === "Scissors") {
        return true;
    } else {
        return false;
    }
}

function lostRound(computerChoice, playerChoice) {
    alert(`You lose this round! ${computerChoice} beats ${playerChoice}.`);
    computerWins++;
}

function wonRound(computerChoice, playerChoice) {
    alert(`You win this round! ${playerChoice} beats ${computerChoice}.`);
    playerWins++;
}

function tieRound(computerChoice) {
    alert(`A Tie! You both picked ${computerChoice}.`);
}

function evaulateRoundWinner(computerChoice, playerChoice) {
    if (computerChoice === "Rock") {
        switch(playerChoice) {
            case "Rock":
                tieRound(computerChoice);
                return "Tie";
            case "Paper":
                wonRound(computerChoice, playerChoice);
                return "Win";
            case "Scissors":
                lostRound(computerChoice, playerChoice);
                return "Loss";           
        }
    } else if (computerChoice === "Paper") {
        switch(playerChoice) {
            case "Paper":
                tieRound(computerChoice);
                return "Tie";
            case "Scissors":
                wonRound(computerChoice, playerChoice);
                return "Win";
            case "Rock":
                lostRound(computerChoice, playerChoice);
                return "Loss";            
        } 
    } else {
                switch(playerChoice) {
                    case "Scissors":
                        tieRound(computerChoice);
                        return "Tie";
                    case "Rock":
                        wonRound(computerChoice, playerChoice);
                        return "Win";
                    case "Paper":
                        lostRound(computerChoice, playerChoice);
                        return "Loss";            
                }
        }
    }



function commenceRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    evaulateRoundWinner(computerChoice, playerChoice);
} 

function haveWinner(numberOfRounds) {
if (numberOfRounds === 5 || playerWins >= 3 || computerWins >= 3) {
    return true;
} else {
    return false;
}
}

function playAgainPrompt(victor) {
        let playAgain = confirm(`The ${victor} wins! Play again?`);
        if (playAgain) {
            newGame();
            } else {
                 alert(`Thanks for playing!`);
            }
}


function newGame() {
    for (let numberOfRounds = 1; numberOfRounds <= totalRounds; numberOfRounds++ ) {
            commenceRound();
            alert(`Current Score: \nPlayer: ${playerWins}\nComputer ${computerWins}\n\n${numberOfRounds} out of ${totalRounds} played.`);
            gameHasWinner = haveWinner(numberOfRounds);
            if (gameHasWinner) {
                if (playerWins > computerWins) {
                    let victor = "player";
                    playAgainPrompt(victor);
                } else if (computerWins > playerWins) {
                    let victor = "computer";
                    playAgainPrompt(victor);
                } else {
                    let victor = "tie";
                    playAgainPrompt(victor);
                }
                return;
            }
        }
    }



newGame();