
let choices = ['rock', 'paper', 'scissors']
var playerScore = 0;
var computerScore = 0;


// Player choice
const playerButtons = document.querySelectorAll('.pic');
playerButtons.forEach((button) => {
    button.addEventListener('click', () => { playGame(button.id); });
})


// Randomly select computer choice
function getComputerChoice(choices) {
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

//all displays
function playGame(player) {
    let computer = getComputerChoice(choices);
    let roundResult = playRound(player, computer);
    let winner = findWinner();
    let displayResult = document.querySelector('#result');
    let displayPlayerScore = document.querySelector('#playerScore');
    let displayComputerScore = document.querySelector('#computerScore');
    let displayWinner = document.querySelector('#winner');
        
    displayResult.textContent = roundResult;
    displayPlayerScore.textContent = playerScore;
    displayComputerScore.textContent = computerScore;
    displayWinner.textContent = winner;   

}


// Play round, returning score for win/tie/loss
function playRound(player, computer) { 
    let result;
    if ((player == 'rock' && computer == 'scissors') || 
        (player == 'paper' && computer == 'rock') || 
        (player == 'scissors' && computer == 'paper')) {
        result = "Win!";
        playerScore += 1;
        return result;
    }
    else if (player == computer) {
        result = "Tie";
        return result;
    }
    else {
        result = "Lose";
        computerScore += 1;
        return result;
    }   
}


function findWinner() {
    if (playerScore >= 5) {
        return "YOU WIN!";
    }
    else if (computerScore >= 5) {
        return "YOU LOSE :("
    }
    else {
        return ""
    }
}








