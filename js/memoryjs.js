/*
var cardOne = "QUEEN";
var cardTwo = cardOne;
var cardThree = "KING";
var cardFour = cardThree;


console.log("user Flipped " + cardOne);
console.log("user Flipped " + cardTwo);
console.log("user Flipped " + cardThree);
console.log("user Flipped " + cardFour);
*/

var cards = [
    {
        rank: "QUEEN",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "QUEEN",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "KING",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "KING",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];

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
    console.log("User flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardId].suit);
    console.log(cards[cardId].cardImage);
    
    this.setAttribute("src", cards[cardId].cardImage);
    if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("Congrats! You have found the Pair's");
        } else {
            alert("Epic Fail, try again!");
        }
    }
}

/*
var flipCard = function(cardId){

    if(cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){

        alert("You found a match!");
    }else{ 
        alert("Sorry, try again!");
    };
    console.log("User filpped " + cards[cardId]);
}
*/

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
