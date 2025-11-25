const size = 3;
const maxSpins = 3;
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
  for(let row = 0; row < size; row++){
    let available = [...emojis];
    for(let col = 0; col< size; col++){
        let i = Math.floor(Math.random() * available.length); 
        slots[col][row].textContent = available[i];
        available.splice(i,1);
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
  return checkRows(slots) || checkDiagonals(slots);
}

function play(ui) {
  ui.spinCount++;
  spin(ui.slots);

  if (checkWin(ui.slots)) {
    ui.spinButton.disabled = true;
    ui.showMessage("You won! 🎉", "green");
  } else if (ui.spinCount >= maxSpins) {
    ui.spinButton.disabled = true;
    ui.showMessage(`You lost! (${ui.spinCount}/${maxSpins} spins) ❌`, "red");
  } else {
    ui.showMessage(`Spin ${ui.spinCount}/${maxSpins}`);
  }
}

function reset(ui) {
  ui.spinCount = 0;
  spin(ui.slots);
  ui.spinButton.disabled = false;
  ui.showMessage(`Spin ${ui.spinCount}/${maxSpins}`);
}

function main() {
  const name = getPlayerName();
  const ui = build(name, size);

  ui.spinCount = 0;
  ui.showMessage(`Spin ${ui.spinCount}/${maxSpins}`);

  spin(ui.slots);

  ui.spinButton.addEventListener("click", () => play(ui));
  ui.resetButton.addEventListener("click", () => reset(ui));
}

document.addEventListener("DOMContentLoaded", main);
