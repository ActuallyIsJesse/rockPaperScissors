// © 2022 Jesse Lord. This is just a fun little game of Rock, Paper Scissors.

const totalRounds = 5;
let computerWins = 0;
let playerWins = 0;
let numberOfRounds = 1;
let buttonAction = "initializeGame"

const startButton = document.querySelector('#start-button');
const messageWindow = document.querySelector('#message-window');
const messageHeading = document.querySelector('#message-h2');
const messageContent = document.querySelector('#message-content');
const messageImage = document.querySelector('#welcome-image');
const gameWrapper = document.querySelector('#game-wrapper');
const rockSelect = document.querySelector('#rock-select');
const paperSelect = document.querySelector('#paper-select');
const scissorsSelect = document.querySelector('#scissors-select');
const scoreCounter = document.querySelector('#score-counter');
const roundCounter = document.querySelector('#round-counter');

// Setup event handlers
startButton.addEventListener('click', () => {
    // Button action is set by a value passed to displayMessage(). We decide what the button should do here.
    switch (buttonAction) {
        case "initializeGame":
            initializeGame();
        case "commenceRound":
            numberOfRounds++;
            commenceRound();
            return;
    }
});

rockSelect.addEventListener('click', () => {
    commenceRound("Rock");
});
 paperSelect.addEventListener('click', () => {
    commenceRound("Paper");
  });
 scissorsSelect.addEventListener('click', () => {
    commenceRound("Scissors");
});

//Initial Setup. Event handlers will carry the game after this
initializeGame();

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3)
    randomChoice = randomChoice === 0 ? randomChoice = "Rock" 
    : randomChoice === 1 ? randomChoice = "Paper" 
    : randomChoice === "Scissors"; 
    return randomChoice;
}

function lostRound(computerChoice, playerChoice) {
    computerWins++;
    drawScore();
    displayMessage(`Oof!`, `You lose this round! ${computerChoice} beats ${playerChoice}`, `Play Next Round`, "commenceRound");
}

function wonRound(computerChoice, playerChoice) {
    playerWins++;
    drawScore();
    displayMessage(`Huzzah!`, `You win this round! ${playerChoice} beats ${computerChoice}`, `Play Next Round`, "commenceRound");
}

function tieRound(computerChoice) {
    drawScore();
    displayMessage(`Oh dear.`, `A Tie! You both picked ${computerChoice}`, `Play Next Round`, "commenceRound");
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

function commenceRound(playerChoice) {
    drawScore();
    messageImage.classList.add('hidden');
    messageWindow.classList.add('hidden');
    gameWrapper.classList.remove('hidden');
    if (numberOfRounds <= totalRounds) {
        let computerChoice = getComputerChoice();
        console.log(computerChoice);
        evaulateRoundWinner(computerChoice, playerChoice);
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
    if (victor != `tie`){
        displayMessage(`That's it!`, `The ${victor} wins! Do you want to play again?`, `Let's Go!`, "initializeGame");
    } else {
        displayMessage(`That's it!`, `It's a tie! Play again?`, `Let's Go!`, "initializeGame"); 
    }
    if (playAgain) {
        initializeGame();
    } else {
         displayMessage("Thanks!", `Thanks for playing!`, "K", "");
        }
    }

function displayMessage(headingText, messageText, buttonText, action) {
    messageContent.textContent = messageText;
    messageHeading.textContent = headingText;
    startButton.textContent = buttonText;
    buttonAction = action;
    gameWrapper.classList.add('hidden');
    messageWindow.classList.remove('hidden');
    }

function drawScore() {
    scoreCounter.textContent = `Player Wins: ${playerWins}   |   Computer Wins ${computerWins}`;
    roundCounter.textContent = `Round: ${numberOfRounds}/${totalRounds}`;
}

function initializeGame() {
    numberOfRounds = 0;
    playerWins = 0;
    computerWins = 0;
    messageImage.classList.remove('hidden');
    displayMessage(`Welcome!`, `If you thought that text-based Rock Paper Scissors was cool, you're going to lose your mind over the GUI version!`, `Play`, "commenceRound");
}