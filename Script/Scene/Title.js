var UITitle = {
    titleText : [8, 60],
    mainGameButton : [160, 160, 960, 80],
    cardGameButton : [160, 240, 960, 80],
    collectionButton : [160, 320, 960, 80],
    optionButton : [160, 400, 960, 80],
    aboutButton : [160, 480, 960, 80],
    mainGameText : [168, 220],
    cardGameText : [168, 300],
    collectionText : [168, 380],
    optionText : [168, 460],
    aboutText : [168, 540],
    versionText : [8, 780],
};

function loopTitle() {
    displayTitle();
}

function displayTitle() {
    context.fillStyle = 'Black';
    context.strokeStyle = 'Black';
    context.font = '60px Opensans';
    context.lineWidth = 2;

    context.clearRect(0, 0, 1280, 800); 

    context.fillText('Card Game', UITitle.titleText[0], UITitle.titleText[1]);

    context.strokeRect(UITitle.mainGameButton[0], UITitle.mainGameButton[1], UITitle.mainGameButton[2], UITitle.mainGameButton[3]);
    context.strokeRect(UITitle.cardGameButton[0], UITitle.cardGameButton[1], UITitle.cardGameButton[2], UITitle.cardGameButton[3]);
    context.strokeRect(UITitle.collectionButton[0], UITitle.collectionButton[1], UITitle.collectionButton[2], UITitle.collectionButton[3]);
    context.strokeRect(UITitle.optionButton[0], UITitle.optionButton[1], UITitle.optionButton[2], UITitle.optionButton[3]);
    context.strokeRect(UITitle.aboutButton[0], UITitle.aboutButton[1], UITitle.aboutButton[2], UITitle.aboutButton[3]);

    context.fillText(`Start Game`, UITitle.mainGameText[0], UITitle.mainGameText[1]);
    context.fillText(`Card Games`, UITitle.cardGameText[0], UITitle.cardGameText[1]);
    context.fillText(`Collection`, UITitle.collectionText[0], UITitle.collectionText[1]);
    context.fillText(`Option`, UITitle.optionText[0], UITitle.optionText[1]);
    context.fillText(`About`, UITitle.aboutText[0], UITitle.aboutText[1]);

    context.font = '32px Opensans';
    context.fillText('Version 0.0.1', UITitle.versionText[0], UITitle.versionText[1]);
}

function mouseUpTitle(x, y) {
    if (state === '') {
        if (pointInsideRect(x, y, UITitle.mainGameButton[0], UITitle.mainGameButton[1], UITitle.mainGameButton[2], UITitle.mainGameButton[3])) {
            scene = 'LevelSelect';
        } else if (pointInsideRect(x, y, UITitle.cardGameButton[0], UITitle.cardGameButton[1], UITitle.cardGameButton[2], UITitle.cardGameButton[3])) {
            scene = 'CardGameSelect';
        } else if (pointInsideRect(x, y, UITitle.collectionButton[0], UITitle.collectionButton[1], UITitle.collectionButton[2], UITitle.collectionButton[3])) {
            scene = 'Collection';
        }
    }
}
