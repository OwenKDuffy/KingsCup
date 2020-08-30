// include Math;
var rules = { 1: "Waterfall",
2: "You",
3: "Me",
4: "Floor",
5: "Guys",
6: "Chicks",
7: "Heaven",
8: "Mate",
9: "Rhyme",
10: "Categories",
11: "Never Have I Ever",
12: "Quizmaster",
13: "King"
};
var suits = {0: "\u2660",
            1: "\u2665",
            2: "\u2666",
            3: "\u2663"
};

console.log("Javascript Working");
var deck = setDeck();
kingsCount = 0;

function setDeck(){
    var deck = [];
    for (var i = 0; i <= 51; i++) {
        deck.push(i);
    }

    shuffle(deck)
    return deck
}
function readRank(card){
    switch(card) {
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
function readRule(card){
    rank = (card % 13) + 1;
    return rules[rank];
}
function readCard(card){
    rank = (card % 13) + 1
    suit = Math.floor(card / 13);
    return "" + readRank(rank) + " of " + suits[suit];
}
function shuffle(deck) {
    for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
}
function drawCard(){
    if(deck.length > 0){
        drawnCard = deck.shift();
        console.log(drawnCard);
        if((drawnCard % 13) + 1 == 13){
            kingsCount++;
            console.log(kingsCount);
            if(kingsCount == 4){
                document.getElementById("card").innerHTML = "KINGS CUP!!!";
                return;
            }
        }
            document.getElementById("card").innerHTML = "" + readCard(drawnCard);
            document.getElementById("rule").innerHTML = "" + readRule(drawnCard);
    }
}
