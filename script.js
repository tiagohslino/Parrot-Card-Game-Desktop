let userNumCards = prompt("Com quantas cartas você quer jogar? (Somente números pares)");
let numCards = parseInt(userNumCards);

while ((numCards % 2 != 0) || (numCards < 4) || (numCards > 14)){
    userNumCards = prompt("Com quantas cartas você quer jogar? (Somente números pares)");
    numCards = parseInt(userNumCards);
}

const cardsArray = [
                "assets/back.png",
];

window.onload = function distributeTotalCards(){
    const cardsTotal = document.querySelector(".cards-container");
    let cardsHTML = "";

    for (let i = 0; i < numCards; i++) {
        cardsHTML += `<li class="card-back"><img src="assets/back.png" /></li>`;
            alert(cardsHTML);
      }
    
      cardsTotal.innerHTML = cardsHTML;
      alert(cardsHTML);
}

distributeTotalCards();
