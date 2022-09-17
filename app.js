function getComputerChoice () {
    const choiceArray = ['Rock', 'Paper', 'Scissors'];
    var randomChoice = Math.floor(Math.random() * choiceArray.length);
    return choiceArray[randomChoice];
}

const result = {
    resultString : "",
    playerScore: 0,
    computerScore: 0
}

function playOneRound(playerSelection, computerSelection) {

    const choiceArray = ['rock', 'paper', 'scissors'];

    if (playerSelection == choiceArray[0] && computerSelection == choiceArray[1]) {
        result.computerScore += 1;
        result.resultString = "You Lost! Paper beats Rock";
    }
    else if (playerSelection == choiceArray[0] && computerSelection == choiceArray[2]) {
        result.playerScore += 1;
        result.resultString = "You Win! Rock beats Scissors";
    }
    else if (playerSelection == choiceArray[1] && computerSelection == choiceArray[0]) {
        result.playerScore += 1;
        result.resultString = "You Win! Paper beats Rock";
    }
    else if (playerSelection == choiceArray[1] && computerSelection == choiceArray[2]) {
        result.computerScore += 1;
        result.resultString = "You Lost! Scissors beats Paper";
    }
    else if (playerSelection == choiceArray[2] && computerSelection == choiceArray[0]) {
        result.computerScore += 1;
        result.resultString = "You Lost! Rock beats Scissors";
    }
    else if (playerSelection == choiceArray[2] && computerSelection == choiceArray[1]) {
        result.playerScore += 1;
        result.resultString = "You Win! Scissors beats Paper";
    }
    else if (playerSelection == computerSelection) {
        result.resultString = "TIE";
    }
    return result;
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your input!").toLowerCase();
        const computerSelection = getComputerChoice().toLowerCase();
        console.log("Player : " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
        console.log("Computer : " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1));
        const result = playOneRound(playerSelection, computerSelection);
        console.log("Result : " + result.resultString);
    }
    console.log("-----------FINAL RESULT----------");
    if (result.playerScore > result.computerScore) {
        console.log("Congratulations!! You have won the set!");
    }
    else if (result.playerScore == result.computerScore) {
        console.log("Oh no it's a tie game!! Play once again!");
    }
    else {
        console.log("Yoy have lost the set! Better luck next time!");
    }
}

//play game
game();
