function cardSort(mode, card) {
    var result = [];

    if (mode === 'Number') {
         
    }
}

function dealerDeckGenerate() {
    dealer.deck = [];

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
