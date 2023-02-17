
let choices = ['rock', 'paper', 'scissors']
var playerScore = 0;
var computerScore = 0;


// Player choice
const playerButtons = document.querySelectorAll('.btn');
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
    findWinner();
    playerPic(player);
    computerPic(computer);
    let displayResult = document.querySelector('#result');
    let displayPlayerScore = document.querySelector('#playerScore');
    let displayComputerScore = document.querySelector('#computerScore');
    //let displayWinner = document.querySelector('#winner');
    
    
        
    displayResult.textContent = roundResult;
    displayPlayerScore.textContent = playerScore;
    displayComputerScore.textContent = computerScore;
    //displayWinner.textContent = winner;   
   

}

function modal(string) {
    let modal = document.getElementById("modal")
    let winText = document.getElementById("winner")
    let span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    winText.textContent = string;
    span.onclick = function() {
        modal.style.display = "none";
    }
}

function playerPic(player) {
    if (player == 'rock') {
        document.getElementById("playerOne").src = "pics/rockeyes.png";
    }
    else if (player == 'scissors') {
        document.getElementById("playerOne").src = "pics/scissorseyes.png";
    }
    else {
        document.getElementById("playerOne").src = "pics/papereyes.png";
    }
}

function computerPic(computer) {
    if (computer == 'rock') {
        document.getElementById("playerTwo").src = "pics/rockeyes.png";
    }
    else if (computer == 'scissors') {
        document.getElementById("playerTwo").src = "pics/scissorseyes.png";
    }
    else {
        document.getElementById("playerTwo").src = "pics/papereyes.png";
    }
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
        return modal("YOU WIN!");
    }
    else if (computerScore >= 5) {
        return modal("YOU LOSE :(");
    }
    else {
        return ""
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }







