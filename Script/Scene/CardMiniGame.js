var UICardMiniGame = {
    menuButton : [1160, 40, 80, 80],
    textBox : [160, 160, 960, 480],
    skipButton : [960, 400, 160, 80],
};

var TCardMiniGame = {
};

function loopCardMiniGame() {
    displayCardMiniGame();
}

function displayCardMiniGame() {
    context.fillStyle = 'Black';
    context.strokeStyle = 'Black';
    context.font = '60px Opensans';
    context.lineWidth = 2;

    context.clearRect(0, 0, 1280, 800); 
    context.fillStyle = 'Green';
    context.fillRect(0, 0, 1280, 800);

    if (gameType === 'Poker') {
        if (state === 'Start') {
            context.fillStyle = 'White';
            context.fillRect(UICardMiniGame.textBox[0], UICardMiniGame.textBox[1], UICardMiniGame.textBox[2], UICardMiniGame.textBox[3]);
            context.strokeRect(UICardMiniGame.textBox[0], UICardMiniGame.textBox[1], UICardMiniGame.textBox[2], UICardMiniGame.textBox[3]);
        }
    }

    context.strokeRect(UICardMiniGame.menuButton[0], UICardMiniGame.menuButton[1], UICardMiniGame.menuButton[2], UICardMiniGame.menuButton[3]);
}

function mouseUpCardMiniGame(x, y) {
}
