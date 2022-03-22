window.onload = main;

function main() {
    canvas = document.getElementById('game');
    context = canvas.getContext('2d');
    canvasRect = canvas.getBoundingClientRect();

    window.addEventListener('mouseup', mouseUp, false);

    imageLoad();

    setInterval(loop, 25);
}

function loop() {
    if (scene === 'Title') {
        loopTitle();
    } else if (scene === 'LevelSelect') {
        loopLevelSelect();
    } else if (scene === 'CharacterGen') {
        loopCharacterGen();
    } else if (scene === 'CardGameSelect') {
        loopCardGameSelect();
    } else if (scene === 'Collection') {
        loopCollection();
    }
}

function mouseUp(event) {
    var x = event.clientX - canvasRect.left;
    var y = event.clientY - canvasRect.top;

    if (scene === 'Title') {
        mouseUpTitle(x, y);
    } else if (scene === 'LevelSelect') {
        mouseUpLevelSelect(x, y);
    } else if (scene === 'CharacterGen') {
        mouseUpCharacterGen(x, y);
    } else if (scene === 'CardGameSelect') {
        mouseUpCardGameSelect(x, y);
    } else if (scene === 'Collection') {
        mouseUpCollection(x, y);
    }
}
