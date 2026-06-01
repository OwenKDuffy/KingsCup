const suits = {
    0: "\u2665",
    1: "\u2666",
    2: "\u2663",
    3: "\u2660"
};
//0:hearts 1:diamonds 2:clubs 3:spades

var deck = setDeck();
var kingsCount = 0;

// Export functions for use in other modules
export { resetDeck, showRules, drawCard, fullscreenMode };

function resetDeck() {
    deck = setDeck();
    document.getElementById("deck-count").innerHTML = `${deck.length} Cards Remaining`;
    document.getElementById("card").style.backgroundPosition = "0px 217px";
    document.getElementById("rule").innerHTML = "<br>";
    document.getElementById("draw").style.display = "inline-block";
}
function setDeck() {
    deck = [...Array(52).keys()];
    shuffle(deck)
    return deck
}
function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
}

function showRules() {
    const list = document.getElementById("rules-list");
    if (list.style.display == "none") {
        document.getElementById("show-rules").innerHTML = "Collapse Rules";
        list.style.display = "block";
        return;
    }
    document.getElementById("show-rules").innerHTML = "Show Rules";
    list.style.display = "none"
}
function readRank(card) {
    switch (card) {
        case 1:
            return "Ace"
        case 11:
            return "Jack"
        case 12:
            return "Queen"
        case 13:
            return "King"
        default:
            return card
    }
}
function readRule(card) {
    let rank = (card % 13) + 1;
    return rank == 13
        ? `King ${kingsCount}/4`
        : document.getElementById(rank).value;
}
function readCard(card) {
    let rank = (card % 13) + 1;
    let suit = Math.floor(card / 13);
    return `${readRank(rank)} of ${suits[suit]}`;
}

function getCardImage(drawnCard) {
    let rank = (drawnCard % 13)
    let suit = Math.floor(drawnCard / 13);
    let xPos = 180 - (180 * (rank));
    let yPos = -1 * (217 * suit);
    return `${xPos}px ${yPos}px`;
}
function drawCard() {
    let drawnCard = deck.shift();
    if ((drawnCard % 13) + 1 == 13) {
        kingsCount++;
    }
    document.getElementById("card").style.backgroundPosition = `${getCardImage(drawnCard)}`;
    document.getElementById("card").alt = `${readCard(drawnCard)}`;
    document.getElementById("deck-count").innerHTML = `${deck.length} Cards Remaining`;
    if ((drawnCard % 13) + 1 == 13 && kingsCount == 4) {
        document.getElementById("rule").innerHTML = "KINGS CUP!!!";
        return;
    }
    document.getElementById("rule").innerHTML = `${readRule(drawnCard)}`;
    if (deck.length === 0) {
        document.getElementById("draw").style.display = "none";
    }
}

function fullscreenMode() {
    const overlay = document.getElementById("overlay");
    var fs = document.getElementById("game-window");
    if (overlay.style.display === "block") {
        document.querySelector('.rules').after(fs);
        document.getElementById('fullscreen-btn').innerText = "Fullscreen";
        overlay.style.display = "none";
        return;
    }
    overlay.appendChild(fs);
    document.getElementById('fullscreen-btn').innerText = "Exit fullscreen";
    overlay.style.display = "block";
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('show-rules')?.addEventListener('click', showRules);
    document.getElementById('fullscreen-btn')?.addEventListener('click', fullscreenMode);
    document.getElementById('card')?.addEventListener('click', drawCard);
    document.getElementById('draw')?.addEventListener('click', drawCard);
    document.getElementById('reset-deck')?.addEventListener('click', resetDeck);
});
