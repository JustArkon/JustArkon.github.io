
const suits = ["hearts", "diamonds", "clubs", "spades"];
const ranks = [
  { rank: "A", value: 11 },
  { rank: "2", value: 2 },
  { rank: "3", value: 3 },
  { rank: "4", value: 4 },
  { rank: "5", value: 5 },
  { rank: "6", value: 6 },
  { rank: "7", value: 7 },
  { rank: "8", value: 8 },
  { rank: "9", value: 9 },
  { rank: "10", value: 10 },
  { rank: "J", value: 10 },
  { rank: "Q", value: 10 },
  { rank: "K", value: 10 }
];

let deck = [];
const playerHandArr = [];
const pcHandArr = [];
let ui;

function getPlayerName() {
  let name;
  while (true) {
    name = prompt("Enter your name:");
    if (!name || name.trim() === "") {
      alert("You must enter a name!");
      continue;
    }
    break;
  }
  return name;
}

function genDeck() {
  deck = [];
  for (const suit of suits) {
    for (const r of ranks) {
      deck.push({ suit: suit, rank: r.rank, value: r.value });
    }
  }
  shuffleDeck();
}

function shuffleDeck() {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

function drawCard() {
  if (deck.length === 0) genDeck();
  return deck.pop();
}


function addCardToHand(handDiv, handArray, card) {
  handArray.push(card);

  const cardElem = document.createElement("img");
  cardElem.className = "card";

  cardElem.src = `./cards/${card.rank}_of_${card.suit}.png`;
  cardElem.alt = `${card.rank} of ${card.suit}`;

  handDiv.appendChild(cardElem);
}
function calcScore(handArray) {
  let sum = 0;
  let aces = 0;

  for (const card of handArray) {
    sum += card.value;
    if (card.rank === "A") aces++;
  }

  while (sum > 21 && aces > 0) {
    sum -= 10;
    aces--;
  }

  return sum;
}

function take(handDiv, handArray, scoreSpan) {
  const card = drawCard();
  addCardToHand(handDiv, handArray, card);
  scoreSpan.textContent = calcScore(handArray);
  checkWinner();
}

function pass() {
  ui.passBtn.disabled = true;
  ui.takeBtn.disabled = true;
  makePcTurn();
}

async function makePcTurn() {
  const playerScore = calcScore(playerHandArr);
  let pcScore = calcScore(pcHandArr);

  while (pcScore < playerScore && pcScore < 21) {
    take(ui.pcHand, pcHandArr, ui.pcScore);
    pcScore = calcScore(pcHandArr);
    ui.pcScore.textContent = pcScore;

    await new Promise(resolve => setTimeout(resolve, 500));
  }

  checkWinner(true);
}

function checkWinner(finalCheck = false) {
  const playerScore = calcScore(playerHandArr);
  const pcScore = calcScore(pcHandArr);

  if (playerScore > 21) {
    ui.setResult("You lose!", "red");
    ui.takeBtn.disabled = true;
    ui.passBtn.disabled = true;
    return true;
  }

  if (playerScore === 21) {
    ui.setResult("You win!", "green");
    ui.takeBtn.disabled = true;
    ui.passBtn.disabled = true;
    return true;
  }

  if (finalCheck) {
    if (pcScore > 21 || playerScore > pcScore) {
      ui.setResult("You win!", "green");
    } else {
      ui.setResult("You lose!", "red");
    }
    ui.takeBtn.disabled = true;
    ui.passBtn.disabled = true;
    return true;
  }

  return false;
}


function reset() {
  playerHandArr.length = 0;
  pcHandArr.length = 0;

  ui.playerHand.innerHTML = "";
  ui.pcHand.innerHTML = "";

  ui.playerScore.textContent = 0;
  ui.pcScore.textContent = 0;

  ui.passBtn.disabled = false;
  ui.takeBtn.disabled = false;

  ui.setResult("", "transparent");
}

function main() {
  const name = getPlayerName();
  ui = build(name);
  genDeck();

  ui.takeBtn.addEventListener("click", () => take(ui.playerHand, playerHandArr, ui.playerScore));
  ui.passBtn.addEventListener("click", () => pass());
  ui.resetBtn.addEventListener("click", reset);
}

document.addEventListener("DOMContentLoaded", main);
