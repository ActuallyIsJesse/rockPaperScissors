const totalRounds = 5;
let computerWins = 0;
let playerWins = 0;
numberOfRounds = 1;

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3)
    randomChoice = (randomChoice = 0) ? randomChoice = "Rock" 
    : (randomChoice = 1) ? randomChoice = "Paper" 
    : randomChoice = "Scissors"; 
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
    computerWins++;
    alert(`You lose this round! ${computerChoice} beats ${playerChoice}.
            \n\nCurrent Score: \nPlayer: ${playerWins}\nComputer ${computerWins}
            \n\n${numberOfRounds} out of ${totalRounds} played.`);
}

function wonRound(computerChoice, playerChoice) {
    playerWins++;
    alert(`You win this round! ${playerChoice} beats ${computerChoice}.
            \n\nCurrent Score: \nPlayer: ${playerWins}\nComputer ${computerWins}
            \n\n${numberOfRounds} out of ${totalRounds} played.`);
}

function tieRound(computerChoice) {
    alert(`A Tie! You both picked ${computerChoice}.
            \n\nCurrent Score: \nPlayer: ${playerWins}\nComputer ${computerWins}
            \n\n${numberOfRounds} out of ${totalRounds} played.`);
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
// The following if statement evaulates if the rounds are up, 
// the player has won the best out of 5, 
// or if it's possible for either player to overtake 
//the other by the end of the round.
    if (numberOfRounds === 5 || playerWins >= 3 || computerWins >= 3 
        || (totalRounds - numberOfRounds) < (playerWins - computerWins) 
        || (totalRounds - numberOfRounds) < (computerWins - playerWins)) {
    return true;
    } else {
    return false;
    }
}

function playAgainPrompt(victor) {
    let playAgain = true;
    if (victor != `tie`){
        playAgain = confirm(`The ${victor} wins! Play again?`)
    } else {
        playAgain = confirm(`It's a tie! Play again?`); 
    }
    if (playAgain) {
        computerWins = 0;
        playerWins = 0;
        numberOfRounds = 0;
        newGame();
    } else {
         alert(`Thanks for playing!`);
        }
}

function newGame() {
    for (; numberOfRounds <= totalRounds; numberOfRounds++ ) {
            commenceRound();
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