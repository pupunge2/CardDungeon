function drawCardDealer(card, x, y) {
    context.drawImage(img.card[card['Element']], x, y);
}

function drawCardBack(x, y) {
    context.drawImage(img.card['Back'], x, y);
}
