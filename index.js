
let cards = [];
let sum = 0
let hasBlackJack;
let isAlive = false
let message = ""
let player = {
    name: "Ajay",
    chips: 10028
}


let playerEl=document.getElementById("player-el");
playerEl.textContent=player.name + ": $" + player.chips

function getRandomCard() {
    return Math.floor(Math.random() * 10 + 2);
}

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
    hasBlackJack = false;
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard
    renderCards();
    renderGame();
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = renderCards();
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
        isAlive=true;
    } else if (sum === 21) {
        message = "You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
    messageEl.textContent = message
}

function renderCards() {
    let x = "";
    for (i = 0; i < cards.length; i++) {
        x += cards[i] + "  ";


    }
    return "Cards: " + x;
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();

    }
    


}