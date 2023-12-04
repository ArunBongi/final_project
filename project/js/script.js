let playerScore = 0;
let computerScore = 0;
let playerRolls = 0;
let computerRolls = 0;
function rollDice() {
    if (playerRolls < 3 && computerRolls < 3) {
        const playerDice1 = rollDie();
        const playerDice2 = rollDie();
        const computerDice1 = rollDie();
        const computerDice2 = rollDie();

        const playerRoundScore = calculateScore(playerDice1, playerDice2);
        const computerRoundScore = calculateScore(computerDice1, computerDice2);
        
        updateDisplay(playerDice1, playerDice2, playerRoundScore, computerDice1, computerDice2, computerRoundScore);

        playerScore += playerRoundScore;
        computerScore += computerRoundScore;

        playerRolls++;
        computerRolls++;

        if (playerRolls === 3 && computerRolls === 3) {
            displayWinner();
            document.getElementById("rollButton").disabled = true; 
        }
    }
}
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerRolls = 0;
    computerRolls = 0;

    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
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
    document.getElementById("playerRoundScore").textContent = `${playerRoundScore}`;
    document.getElementById("computerRoundScore").textContent = `${computerRoundScore}`;
    document.getElementById("playerScore").textContent = playerScore + playerRoundScore;
    document.getElementById("computerScore").textContent = computerScore + computerRoundScore;
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
