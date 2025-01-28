let userNumCards = prompt("Com quantas cartas você quer jogar? (Somente números pares)");
let numCards = parseInt(userNumCards);

while ((numCards % 2 != 0) || (numCards < 4) || (numCards > 14)){
    userNumCards = prompt("Com quantas cartas você quer jogar? (Somente números pares)");
    numCards = parseInt(userNumCards);
}

const cardsArray = [
                "assets/bobrossparrot.gif",
                "assets/explodyparrot.gif",
                "assets/fiestaparrot.gif",
                "assets/metalparrot.gif",
                "assets/revertitparrot.gif",
                "assets/tripletsparrot.gif",
                "assets/unicornparrot.gif",
];

let cardsHTML = "";
window.onload = function distributeTotalCards(){
    const cardsTotal = document.querySelector(".cards-container");
    

    for (let i = 0; i < numCards; i++) {
        cardsHTML += `<li class="card-back" id="cardId${i+1}" onclick="revealCard(this)"><img src="assets/back.png" /></li>`;
            alert(cardsHTML);
            
      }
    
      cardsTotal.innerHTML = cardsHTML;
}

distributeTotalCards();

function revealCard (frontCard){
    
    const selectedID = frontCard.id;
    const selectedCard = document.getElementById(selectedID);
    
    for (let j=0; j < numCards; j++){
        if (selectedID == `cardId${j+1}`){
            selectedCard.outerHTML = `<li class="card-back" id="cardId${j+1}" onclick="revealCard(this)"><img src="${cardsArray[j]}" /></li>`;
        }
    }

}

