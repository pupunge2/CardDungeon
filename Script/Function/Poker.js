function determineCardState(card) {

}

function dealerDeckGeneratePoker(mode) {
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

function playerDeckGeneratePoker(mode) {
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

function shuffle(list) {
    var temp_list = [];
    var result = [];

    for (var i = 0; i < list.length; i++) {
        temp_list.push(list[i]);
    }

    while (temp_list.length > 0) {
        var temp_index = Math.floor(Math.random() * temp_list.length);
        var temp_card = temp_list[0];
        temp_list[0] = temp_list[temp_index];
        temp_list[temp_index] = temp_card;
        result.push(temp_list[0]);
        temp_list.shift();
    }

    return result;
}

function playerHandGeneratePoker() {
    playerCard.hand = [];

    for (i = 0; i < 5; i++) {
        playerCard.hand.push(playerCard.deck.shift());
    }
}
