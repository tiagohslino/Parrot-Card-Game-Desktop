let numCards = parseInt(prompt("Com quantas cartas você quer jogar? Somente números pares!"));

while ((numCards % 2 !== 0) || (numCards < 4) || (numCards > 14)) {
    numCards = parseInt(prompt("Com quantas cartas você quer jogar? Somente números pares!"));
}

const cardImages = [
    "assets/bobrossparrot.gif",
    "assets/explodyparrot.gif",
    "assets/fiestaparrot.gif",
    "assets/metalparrot.gif",
    "assets/revertitparrot.gif",
    "assets/tripletsparrot.gif",
    "assets/unicornparrot.gif",
];

const cards = [];

for (let i = 0; i < (numCards / 2); i++) {
    cards.push(cardImages[i]);
    cards.push(cardImages[i]);
}

cards.sort(() => Math.random() - 0.5);

let firstCard = null;
let secondCard = null;
let cardsBlocked = false;
let points = 0;
let moves = 0;

window.onload = function distributeCards() {
    const cardsContainer = document.querySelector(".cards-container");

    let cardsHTML = "";
    for (let i = 0; i < numCards; i++) {
        cardsHTML += `
            <li class="card" data-par="${cards[i]}">
                <div class="card-back">
                    <img src="assets/back.png">
                </div>
                <div class="card-front">
                    <img src="${cards[i]}">
                </div>
            </li>
        `;
    }
    cardsContainer.innerHTML = cardsHTML;

    const cardElements = document.querySelectorAll('.card');

    for (let i = 0; i < cardElements.length; i++) {
        cardElements[i].addEventListener('click', flipCard);
    }

    points = document.querySelectorAll('.card.toggle[data-par]').length / 2;
}

function flipCard() {
    if (cardsBlocked == true) {
        return;
    }

    if (this === firstCard) {
        return;
    }

    moves++; 

    this.classList.add('toggle');

    if (!firstCard) {
        firstCard = this;
    } else {
        secondCard = this;
        checkForMatch();
    }
}

function checkForMatch() {
    if (firstCard.dataset.par === secondCard.dataset.par) {
        handleMatch();
    } else {
        handleNoMatch();
    }
}

function handleMatch() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    firstCard = null;
    secondCard = null;
    cardsBlocked = false;

    points = document.querySelectorAll('.card.toggle[data-par]').length / 2;

    if (document.querySelectorAll('.card').length === document.querySelectorAll('.card.toggle').length) {
        setTimeout(() => {
            alert(`You won in ${moves} moves!`);
        }, 500);
    }
}

function handleNoMatch() {
    cardsBlocked = true;
    setTimeout(() => {
        firstCard.classList.remove('toggle');
        secondCard.classList.remove('toggle');
        firstCard = null;
        secondCard = null;
        cardsBlocked = false;
    }, 1000);
}

