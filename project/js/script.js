let game = {
    playerScore: 0,
    computerScore: 0,
    playerRolls: 0,
    computerRolls: 0
};

function rollDice() {
    if (game.playerRolls < 3 && game.computerRolls < 3) {
        const playerDice1 = rollDie();
        const playerDice2 = rollDie();
        const computerDice1 = rollDie();
        const computerDice2 = rollDie();

        const playerRoundScore = calculateScore(playerDice1, playerDice2);
        const computerRoundScore = calculateScore(computerDice1, computerDice2);
        
        updateDisplay(playerDice1, playerDice2, playerRoundScore, computerDice1, computerDice2, computerRoundScore);

        game.playerScore += playerRoundScore;
        game.computerScore += computerRoundScore;

        game.playerRolls++;
        game.computerRolls++;

        if (game.playerRolls === 3 && game.computerRolls === 3) {
            displayWinner();
            document.getElementById("rollButton").disabled = true; 
        }
    }
}
function resetGame() {
    game.playerScore = 0;
    game.computerScore = 0;
    game.playerRolls = 0;
    game.computerRolls = 0;

    document.getElementById("playerScore").textContent = game.playerScore;
    document.getElementById("computerScore").textContent = game.computerScore;
    document.getElementById("playerRoundScore").textContent = "";
    document.getElementById("computerRoundScore").textContent = "";
    document.getElementById("playerDice").textContent = "";
    document.getElementById("computerDice").textContent = "";
    document.getElementById("displayWinner").textContent = "";
    document.getElementById("playerDiceImage1").setAttribute('src', '../images/dice-face-1.png');
    document.getElementById("playerDiceImage2").setAttribute('src', '../images/dice-face-2.png');
    document.getElementById("computerDiceImage1").setAttribute('src', '../images/dice-face-1.png');
    document.getElementById("computerDiceImage2").setAttribute('src', '../images/dice-face-2.png');

    document.getElementById("rollButton").disabled = false; 
}

function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function calculateScore(die1, die2) {
    if (die1 === 1 || die2 === 1) {
        return 0;
    } 
    else if (die1 === die2) {
        return (die1 + die2) * 2;
    }
    else {
        return die1 + die2;
    }
}
function updateDisplayWithAnimation(elementId, newValue) {
    $(`#${elementId}`).fadeOut(300, function() {
        $(this).text(newValue).fadeIn(300);
    });
}


function updateDisplay(playerDie1, playerDie2, playerRoundScore, computerDie1, computerDie2, computerRoundScore) {    
    
    const playerDiceImage1 = `../images/dice-face-${playerDie1}.png`;
    const playerDiceImage2 = `../images/dice-face-${playerDie2}.png`;
    const computerDiceImage1 = `../images/dice-face-${computerDie1}.png`;
    const computerDiceImage2 = `../images/dice-face-${computerDie2}.png`;


    document.getElementById("playerDiceImage1").setAttribute('src', playerDiceImage1);
    document.getElementById("playerDiceImage2").setAttribute('src', playerDiceImage2);
    document.getElementById("computerDiceImage1").setAttribute('src', computerDiceImage1);
    document.getElementById("computerDiceImage2").setAttribute('src', computerDiceImage2);
    
    document.getElementById("playerDice").textContent = `${playerDie1}, ${playerDie2}`;
    document.getElementById("computerDice").textContent = `${computerDie1}, ${computerDie2}`;

    updateDisplayWithAnimation("playerRoundScore", `${playerRoundScore}`);
    updateDisplayWithAnimation("computerRoundScore", `${computerRoundScore}`);
    updateDisplayWithAnimation("playerScore", `${game.playerScore + playerRoundScore}`);
    updateDisplayWithAnimation("computerScore", `${game.computerScore + computerRoundScore}`);

}

function displayWinner() {
    let winner;
    if (playerScore > computerScore) {
        winner = "Player";
    } else if (playerScore < computerScore) {
        winner = "Computer";
    } else {
        winner = "Scores are equal";
    }

    const winnerDisplay = document.getElementById("displayWinner");
    winnerDisplay.textContent = `The winner is: ${winner}`;
}
