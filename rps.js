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