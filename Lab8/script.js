let playerNumberDisplay;
let computerNumberDisplay;
let playerScoreDisplay;
let computerScoreDisplay;
let resultDisplay;

let playerScore = 0;
let computerScore = 0;
let playerName = "";

function main() {
  getName();
  playerNumberDisplay = document.getElementById("player-number");
  computerNumberDisplay = document.getElementById("computer-number");
  playerScoreDisplay = document.getElementById("player-score");
  computerScoreDisplay = document.getElementById("computer-score");
  resultDisplay = document.getElementById("result");

  document.getElementById("play-btn").addEventListener("click", playRound);
}

function getName() {
  while (true) {
    playerName = prompt("Enter your name:");

    if (playerName === null) {
      alert("Name not entered. Please enter your name.");
      continue;
    }

    playerName = playerName.trim();
    if (playerName === "") {
      alert("Name cannot be empty!");
      continue;
    }

    document.getElementById("player-name").textContent = playerName;
    break;
  }
}

function playRound() {
  const playerNumber = rollDice();
  const computerNumber = rollDice();

  updateNumbers(playerNumber, computerNumber);

  const resultText = determineWinner(playerNumber, computerNumber);

  updateScores(resultText);
  checkGameEnd();
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function updateNumbers(playerNumber, computerNumber) {
  playerNumberDisplay.textContent = playerNumber;
  computerNumberDisplay.textContent = computerNumber;
}

function determineWinner(playerNumber, computerNumber) {
  if (playerNumber > computerNumber) {
    playerScore++;
    return `${playerName} won the round!`;
  } else if (computerNumber > playerNumber) {
    computerScore++;
    return "Computer won the round!";
  } else {
    return "It's a draw!";
  }
}

function updateScores(resultText) {
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  resultDisplay.textContent = resultText;
}

function checkGameEnd() {
  if (playerScore === 3 || computerScore === 3) {
    const winner = playerScore === 3 ? playerName : "Computer";
    resultDisplay.textContent = `${winner} won the game!`;
    document.getElementById("play-btn").disabled = true;
  }
}

document.addEventListener("DOMContentLoaded", main);
