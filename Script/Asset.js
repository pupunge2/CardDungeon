var img = {
    card : {
        'Fire' : new Image(),
        'Water' : new Image(),
        'Nature' : new Image(),
        'Earth' : new Image(),
        'Light' : new Image(),
        'Dark' : new Image(),
        'Normal' : new Image(),
        'Back' : new Image(),
    },
};

function imageLoad() {
    img.card['Fire'].src = 'Image/Card/FireCard.png';
    img.card['Water'].src = 'Image/Card/WaterCard.png';
    img.card['Nature'].src = 'Image/Card/NatureCard.png';
    img.card['Earth'].src = 'Image/Card/EarthCard.png';
    img.card['Light'].src = 'Image/Card/LightCard.png';
    img.card['Dark'].src = 'Image/Card/DarkCard.png';
    img.card['Normal'].src = 'Image/Card/NormalCard.png';
    img.card['Back'].src = 'Image/Card/CardBack.png';
}
