var UICardMiniGame = {
    menuButton : [1160, 40, 80, 80],
    textBox : [160, 160, 960, 480],
    skipButton : [880, 560, 240, 80],
    skipText : [888, 620],

    playerHand : [[80, 600], [200, 600], [320, 600], [440, 600], [560, 600]],
    cardBack : [[1120, 600]]
};

var TCardMiniGame = {
    explanation : ['Welcome']
};

function loopCardMiniGame() {
    tickMiniGame();
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
            context.fillStyle = 'Black';
            context.fillText('Skip >>', UICardMiniGame.skipText[0], UICardMiniGame.skipText[1]);
        } else if (state === 'StartAnimation') {
            for (var i = 0; i < Math.min(animation.cardFlip, 5); i++) {
                 drawCardBack(UICardMiniGame.playerHand[i][0], UICardMiniGame.playerHand[i][1]);
            }
            
            drawCardBack(UICardMiniGame.cardBack[0][0], UICardMiniGame.cardBack[0][1]);

        } else if (state === 'CardChange') {
            for (var i = 0; i < 5; i++) {
                 drawCardBasic(playerCard.hand[i], UICardMiniGame.playerHand[i][0], UICardMiniGame.playerHand[i][1]);
            }

            drawCardBack(UICardMiniGame.cardBack[0][0], UICardMiniGame.cardBack[0][1]);
        } 
    }

    context.fillStyle = 'White';
    context.fillRect(UICardMiniGame.menuButton[0], UICardMiniGame.menuButton[1], UICardMiniGame.menuButton[2], UICardMiniGame.menuButton[3]);
    context.strokeRect(UICardMiniGame.menuButton[0], UICardMiniGame.menuButton[1], UICardMiniGame.menuButton[2], UICardMiniGame.menuButton[3]);
}

function tickMiniGame() {
    if (state === 'StartAnimation') {
        animation.tick += 1;
        animation.cardFlip = Math.floor(animation.tick / 20);

        if (animation.tick > 120) {
            animation.tick = 0;
            state = 'CardChange';
        }
    }
}

function mouseUpCardMiniGame(x, y) {
    if (paused === false) {
        if (state === 'Start') {
            if (pointInsideRect(x, y, UICardMiniGame.skipButton[0], UICardMiniGame.skipButton[1], UICardMiniGame.skipButton[2], UICardMiniGame.skipButton[3])) {
                state = 'StartAnimation';
                animation.tick = 0;
                dealerDeckGeneratePoker('MiniGame');
                playerDeckGeneratePoker('MiniGame');
                dealer.deck = shuffle(dealer.deck);
                playerCard.deck = shuffle(playerCard.deck);
                playerHandGeneratePoker(); 
            }
        }
    }
}
