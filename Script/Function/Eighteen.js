function dealerDeckGenerateEighteen(mode) {
    dealer.deck = [];

    if (mode === 'MiniGame') {
        for (var i = 0; i < 9; i++) {
            dealer.deck.push({'Element' : 'Fire', 'Number' : i});
            dealer.deck.push({'Element' : 'Water', 'Number' : i});
            dealer.deck.push({'Element' : 'Nature', 'Number' : i});
            dealer.deck.push({'Element' : 'Earth', 'Number' : i});
            dealer.deck.push({'Element' : 'Light', 'Number' : i});
            dealer.deck.push({'Element' : 'Dark', 'Number' : i});
            dealer.deck.push({'Element' : 'Normal', 'Number' : i});
        }
    }
}

function playerDeckGenerateEighteen(mode) {
    playerCard.deck = [];

    if (mode === 'MiniGame') {
        for (var i = 0; i < 9; i++) {
            playerCard.deck.push({'Element' : 'Fire', 'Number' : i});
            playerCard.deck.push({'Element' : 'Water', 'Number' : i});
            playerCard.deck.push({'Element' : 'Nature', 'Number' : i});
            playerCard.deck.push({'Element' : 'Earth', 'Number' : i});
            playerCard.deck.push({'Element' : 'Light', 'Number' : i});
            playerCard.deck.push({'Element' : 'Dark', 'Number' : i});
            playerCard.deck.push({'Element' : 'Normal', 'Number' : i});
        }
    }
}
