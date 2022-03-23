function drawCardBasic(card, x, y) {
    context.font = '40px Opensans';
    context.fillStyle = 'Black';
    context.drawImage(img.card[card['Element']], x, y);
    context.fillText(card['Number'], x + 8, y + 48);
}

function drawCardBack(x, y) {
    context.drawImage(img.card['Back'], x, y);
}
