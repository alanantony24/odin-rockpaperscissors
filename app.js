function getComputerChoice () {
    const choiceArray = ['Rock', 'Paper', 'Scissors'];
    var randomChoice = Math.floor(Math.random() * choiceArray.length);
    return choiceArray[randomChoice];
}

console.log("Computer : " + getComputerChoice());