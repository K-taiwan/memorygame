var cards = [{
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },{
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },{
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },{
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }];
    
var cardsInPlay = [];


function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("Congrats! You have found the Pairs");
      } else {
        console.log("Epic Fail, try again!");
      }
}



function flipCard(cardId) {
    var cardId = this.getAttribute('data-id');
    console.log("User flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);

    
    this.setAttribute("src", cards[cardId].cardImage);
    if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("Congrats! You have found the Pairs");
    } else {
        alert("Epic Fail, try again!");
    }
}

}

function createBoard() {
    for (i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute("src", "images/back.png");
        cardElement.setAttribute("data-id", i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
}

function resetGame() {
    document.getElementById('game-board').innerHTML = "";
    createBoard();
    cardsInPlay = []
}

createBoard();
checkForMatch();
