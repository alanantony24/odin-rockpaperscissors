function getComputerChoice() {
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

    const choiceArray = ['Rock', 'Paper', 'Scissors'];

    if (playerSelection == choiceArray[0] && computerSelection == choiceArray[1]) {
        result.computerScore += 1;
        result.resultString = "You Lost! Paper beats Rock";
        console.log(result);
    }
    else if (playerSelection == choiceArray[0] && computerSelection == choiceArray[2]) {
        result.playerScore += 1;
        result.resultString = "You Win! Rock beats Scissors";
        console.log(result);
    }
    else if (playerSelection == choiceArray[1] && computerSelection == choiceArray[0]) {
        result.playerScore += 1;
        result.resultString = "You Win! Paper beats Rock";
        console.log(result);
    }
    else if (playerSelection == choiceArray[1] && computerSelection == choiceArray[2]) {
        result.computerScore += 1;
        result.resultString = "You Lost! Scissors beats Paper";
        console.log(result);
    }
    else if (playerSelection == choiceArray[2] && computerSelection == choiceArray[0]) {
        result.computerScore += 1;
        result.resultString = "You Lost! Rock beats Scissors";
        console.log(result);
    }
    else if (playerSelection == choiceArray[2] && computerSelection == choiceArray[1]) {
        result.playerScore += 1;
        result.resultString = "You Win! Scissors beats Paper";
        console.log(result);
    }
    else if (playerSelection == computerSelection) {
        result.playerScore += 0;
        result.computerScore += 0;
        result.resultString = "TIE";
        console.log(result);
    }

    displayResult(playerSelection, computerSelection, result);

    return result;
}

function displayResult(playerSelection, computerSelection, result) {
    
    document.getElementById('playerSelection').textContent =  "Player Selection : " + playerSelection;
    document.getElementById('computerSelection').textContent = "Computer Selection : " + computerSelection;
    document.getElementById('playerScore').textContent = "Player Score : " + result.playerScore;
    document.getElementById('computerScore').textContent = "Computer Score : " + result.computerScore;
    document.getElementById('result').textContent = "Result : " + result.resultString

    if (result.playerScore == 5) {
        alert("You have won the set! Congratulations");
    }
    else if (result.computerScore == 5) {
        alert("Oh no! You have lost the set! Better luck next time");
    }
}

