let userNumCards = prompt("Com quantas cartas você quer jogar? (Somente números pares)");
let numCards = parseInt(userNumCards);

while ((numCards % 2 != 0) || (numCards < 4) || (numCards > 14)){
    userNumCards = prompt("Com quantas cartas você quer jogar? (Somente números pares)");
    numCards = parseInt(userNumCards);
}

