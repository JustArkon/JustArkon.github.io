function build(username) {
    const wrapper = document.createElement("div");
    wrapper.id = "game-wrapper";
    document.body.appendChild(wrapper);

    const block = document.createElement("div");
    block.id = "game-block";
    wrapper.appendChild(block);
    
    const playerPanel = document.createElement("div");
    playerPanel.id = "player-panel";
    block.appendChild(playerPanel);

    const nameElem = document.createElement("h2");
    nameElem.textContent = `Player: ${username}`;
    playerPanel.appendChild(nameElem);

    const scoreElem = document.createElement("p");
    scoreElem.textContent = "Score: "; 

    const playerScore = document.createElement("span");
    playerScore.id = "score";
    playerScore.textContent = 0; 
    scoreElem.appendChild(playerScore);
    playerPanel.appendChild(scoreElem);

    const handTitle = document.createElement("h3");
    handTitle.textContent = "Hand:";
    playerPanel.appendChild(handTitle);

    const playerHand = document.createElement("div");
    playerHand.id = "player-hand";
    playerPanel.appendChild(playerHand);

    const centerPanel = document.createElement("div");
    centerPanel.id = "center-panel";
    block.appendChild(centerPanel);

    const title = document.createElement("h2");
    title.textContent = "Player vs Computer";
    centerPanel.appendChild(title);


    const takeBtn = document.createElement("button");
    takeBtn.id = "takeBtn";
    takeBtn.textContent = "Take";
    centerPanel.appendChild(takeBtn);

    const passBtn = document.createElement("button");
    passBtn.id = "passBtn";
    passBtn.textContent = "Pass";
    centerPanel.appendChild(passBtn);

    const resetBtn = document.createElement("button");
    resetBtn.id = "resetBtn";
    resetBtn.textContent = "Reset";
    centerPanel.appendChild(resetBtn);

    const result = document.createElement("p");
    result.id = "result";
    result.style.fontSize = "24px";
    result.style.fontWeight = "bold";
    result.style.marginTop = "20px";
    centerPanel.appendChild(result);

    // --- PC Panel ---
    const pcPanel = document.createElement("div");
    pcPanel.id = "pc-panel";
    block.appendChild(pcPanel);

    const pcName = document.createElement("h2");
    pcName.textContent = "Computer";
    pcPanel.appendChild(pcName);

    const pcScoreElem = document.createElement("p");
    pcScoreElem.innerHTML = `Score: <span id="pc-score">0</span>`;
    pcPanel.appendChild(pcScoreElem);

    const pcHandTitle = document.createElement("h3");
    pcHandTitle.textContent = "Cards:";
    pcPanel.appendChild(pcHandTitle);

    const pcHand = document.createElement("div");
    pcHand.id = "pc-hand";
    pcPanel.appendChild(pcHand);

    const pcScore = document.getElementById("pc-score");

    function setResult(text, bgColor = "#333") {
        result.textContent = text;
        result.style.backgroundColor = bgColor;
        result.style.padding = "10px";
        result.style.borderRadius = "8px";
    }

    return { takeBtn, passBtn, resetBtn, playerHand, pcHand, playerScore, pcScore, result, setResult };
}
