
// Variables
let choices = ['rock', 'paper', 'scissors']
const playerSelection = "Rock";
let computerSelection = getComputerChoice(choices);



// Randomly select computer choice
function getComputerChoice(choices) {
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}


// Play round, returning score for win/tie/loss
function playRound(playerSelection, computerSelection) {
    let computer = getComputerChoice(choices);
    let player = playerSelection.toLowerCase();
    let result = 0;
    if ((player == 'rock' && computer == 'scissors') || 
        (player == 'paper' && computer == 'rock') || 
        (player == 'scissors' && computer == 'paper')) {
        result = 1;
        return result;
    }
    else if (player == computerSelection) {
        result = 0;
        return result;
    }
    else {
        result = 0;
        return result;
    }   
}


// Play 5 round game, declare winner
function game() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        score += playRound(playerSelection, computerSelection);
        console.log(score);
    }

    return score;
}

function winner() {
    score = game();
    if (score >= 3) {
        return "You Win! :)";
    }
    else if (score == 2) {
        return "It's a Tie!";
    }
    else {
        return "You Lose! :("
    }
}   


console.log(winner());



