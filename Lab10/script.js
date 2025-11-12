const size = 3;
const emojis = ["🍒", "🍋", "🍉", "⭐", "🍇"];

function getPlayerName() {
  let name;
  while (true) {
    name = prompt("Enter your name:");
    if (!name) {
      alert("You must enter a name!");
      continue;
    }
    if (name.trim() === "") continue;
    break;
  }
  return name;
}

function spin(slots) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      slots[i][j].textContent = emojis[Math.floor(Math.random() * emojis.length)];
    }
  }
}

function checkRows(slots) {
  for (let i = 0; i < size; i++) {
    const first = slots[i][0].textContent;
    if (slots[i].every(slot => slot.textContent === first)) {
      return true;
    }
  }
  return false;
}

function checkCols(slots) {
  for (let j = 0; j < size; j++) {
    let colWin = true;
    const first = slots[0][j].textContent;
    for (let i = 1; i < size; i++) {
      if (slots[i][j].textContent !== first) {
        colWin = false;
        break;
      }
    }
    if (colWin) return true;
  }
  return false;
}

function checkDiagonals(slots) {
  let mainWin = true;
  const firstMain = slots[0][0].textContent;
  for (let i = 1; i < size; i++) {
    if (slots[i][i].textContent !== firstMain) mainWin = false;
  }
  if (mainWin) return true;

  let antiWin = true;
  const firstAnti = slots[0][size - 1].textContent;
  for (let i = 1; i < size; i++) {
    if (slots[i][size - 1 - i].textContent !== firstAnti) antiWin = false;
  }
  if (antiWin) return true;

  return false;
}

function checkWin(slots) {
  return checkRows(slots) || checkCols(slots) || checkDiagonals(slots);
}

function play(ui) {
  spin(ui.slots);
  if (checkWin(ui.slots)) {
    ui.spinButton.disabled = true;
    ui.showWinMessage();
  }
}

function reset(ui){
    spin(ui.slots);
    ui.spinButton.disabled = false;
    ui.hideWinMessage();
}

function main() {
  const name = getPlayerName();
  const ui = build(name, size);

  spin(ui.slots);

  ui.spinButton.addEventListener("click", () => play(ui));
  ui.resetButton.addEventListener("click", () => reset(ui));
}

document.addEventListener("DOMContentLoaded", main);
