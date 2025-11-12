function build(username, size = 3) {
    const container = document.createElement("div");
    container.id = "game";
    document.body.appendChild(container);

    const greeting = document.createElement("p");
    greeting.textContent = `Welcome, ${username}!`;
    container.appendChild(greeting);
    
    const winMessage = document.createElement("div");
    winMessage.id = "win-message";
    winMessage.style.display = "block";
    container.appendChild(winMessage);

    const grid = document.createElement("div");
    grid.className = "grid";
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.appendChild(grid);

    const slots = [];
    for (let r = 0; r < size; r++) {
        const row = [];
        for (let c = 0; c < size; c++) {
        const slot = document.createElement("div");
        slot.className = "slot";
        grid.appendChild(slot);
        row.push(slot);
        }
        slots.push(row);
    }

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";
    container.appendChild(buttonContainer);

    const resetButton = document.createElement("button");
    resetButton.textContent = "Restart 🔄";
    buttonContainer.appendChild(resetButton);

    const spinButton = document.createElement("button");
    spinButton.textContent = "Spin 🎰";
    buttonContainer.appendChild(spinButton);

    function showMessage(message, color = "#402218") {
        winMessage.textContent = message;
        winMessage.style.color = color;
    }


    return { slots, spinButton, resetButton, showMessage};
}
