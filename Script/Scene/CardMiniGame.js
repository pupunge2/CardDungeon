var UICardMiniGame = {
    menuButton : [1160, 40, 80, 80],
    menuRect : [480, 240, 320, 320],
    resumeButton : [480, 240, 320, 160],
    resumeText : [496, 360],
    exitButton : [480, 400, 320, 160],
    exitText : [496, 520],
    textBox : [160, 160, 960, 480],
    skipButton : [880, 560, 240, 80],
    skipText : [888, 620],

    playerHandPoker : [[80, 600], [200, 600], [320, 600], [440, 600], [560, 600]],
    dealerHandPoker : [[80, 160], [200, 160], [320, 160], [440, 160], [560, 160]],
    cardBackPoker : [[1120, 600], [1126, 600], [1132, 600], [1120, 160], [1126, 160], [1132, 160]],

    cardSize : [120, 160],
    doneButton : [1040, 320, 160, 80],
};

var TCardMiniGame = {
    explanation : ['Welcome']
};

function loopCardMiniGame() {
    if (paused === false) {
        tickMiniGame();
    }
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
        } else if (state === 'StartAnimationPoker') {
            for (var i = 0; i < Math.min(animation.cardFlip, 5); i++) {
                 drawCardBack(UICardMiniGame.playerHandPoker[i][0], UICardMiniGame.playerHandPoker[i][1]);
            }
            
            for (var i = 0; i < 6; i++) {
                drawCardBack(UICardMiniGame.cardBackPoker[i][0], UICardMiniGame.cardBackPoker[i][1]);
            }
        } else if (state === 'CardChangePoker') {
            for (var i = 0; i < 5; i++) {
                drawCardBasic(playerCard.hand[i], UICardMiniGame.playerHandPoker[i][0], UICardMiniGame.playerHandPoker[i][1]);
                drawCardBack(UICardMiniGame.dealerHandPoker[i][0], UICardMiniGame.dealerHandPoker[i][1]);
            }

            for (var i = 0; i < 6; i++) {
                drawCardBack(UICardMiniGame.cardBackPoker[i][0], UICardMiniGame.cardBackPoker[i][1]);
            }

            for (var i = 0; i < 5; i++) {
                context.strokeStyle = 'Orange';
                context.lineWidth = 6;
                if (playerCard.handChange[i] === true) {
                    context.strokeRect(UICardMiniGame.playerHandPoker[i][0], UICardMiniGame.playerHandPoker[i][1], UICardMiniGame.cardSize[0], UICardMiniGame.cardSize[1]);
                }
            }

            context.fillStyle = 'White';
            context.strokeStyle = 'black';
            context.lineWidth = 2;
            context.fillRect(UICardMiniGame.doneButton[0], UICardMiniGame.doneButton[1], UICardMiniGame.doneButton[2], UICardMiniGame.doneButton[3]);
            context.strokeRect(UICardMiniGame.doneButton[0], UICardMiniGame.doneButton[1], UICardMiniGame.doneButton[2], UICardMiniGame.doneButton[3]);
        } else if (state === 'ResultAnimationPoker') {
            for (var i = 0; i < 6; i++) {
                drawCardBack(UICardMiniGame.cardBackPoker[i][0], UICardMiniGame.cardBackPoker[i][1]);
            }

            if (animation.dealerCardFlip === false) {
                for (var i = 0; i < 5; i++) {
                    drawCardBasic(playerCard.hand[i], UICardMiniGame.playerHandPoker[i][0], UICardMiniGame.playerHandPoker[i][1]);
                    drawCardBack(UICardMiniGame.dealerHandPoker[i][0], UICardMiniGame.dealerHandPoker[i][1]);
                }
            } else if (animation.dealerCardFlip === true) {
                for (var i = 0; i < 5; i++) {
                    drawCardBasic(playerCard.hand[i], UICardMiniGame.playerHandPoker[i][0], UICardMiniGame.playerHandPoker[i][1]);
                    drawCardBasic(dealer.hand[i], UICardMiniGame.dealerHandPoker[i][0], UICardMiniGame.dealerHandPoker[i][1]);
                }
            }
        } else if (state === 'ResultPoker') {
            for (var i = 0; i < 6; i++) {
                drawCardBack(UICardMiniGame.cardBackPoker[i][0], UICardMiniGame.cardBackPoker[i][1]);
            }
            
            for (var i = 0; i < 5; i++) {
                drawCardBasic(playerCard.hand[i], UICardMiniGame.playerHandPoker[i][0], UICardMiniGame.playerHandPoker[i][1]);
                drawCardBasic(dealer.hand[i], UICardMiniGame.dealerHandPoker[i][0], UICardMiniGame.dealerHandPoker[i][1]);
            }
        }
    }

    if (paused === true) {
        context.fillStyle = 'White';
        context.strokeStyle = 'black';
        context.lineWidth = 2;
        context.fillRect(UICardMiniGame.menuRect[0], UICardMiniGame.menuRect[1], UICardMiniGame.menuRect[2], UICardMiniGame.menuRect[3]);
        context.strokeRect(UICardMiniGame.resumeButton[0], UICardMiniGame.resumeButton[1], UICardMiniGame.resumeButton[2], UICardMiniGame.resumeButton[3]);
        context.strokeRect(UICardMiniGame.exitButton[0], UICardMiniGame.exitButton[1], UICardMiniGame.exitButton[2], UICardMiniGame.exitButton[3]);
        context.fillStyle = 'black';
        context.fillText('Resume', UICardMiniGame.resumeText[0], UICardMiniGame.resumeText[1]);
        context.fillText('Exit', UICardMiniGame.exitText[0], UICardMiniGame.exitText[1]);
    }

    context.fillStyle = 'White';
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    context.fillRect(UICardMiniGame.menuButton[0], UICardMiniGame.menuButton[1], UICardMiniGame.menuButton[2], UICardMiniGame.menuButton[3]);
    context.strokeRect(UICardMiniGame.menuButton[0], UICardMiniGame.menuButton[1], UICardMiniGame.menuButton[2], UICardMiniGame.menuButton[3]);
}

function tickMiniGame() {
    if (state === 'StartAnimationPoker') {
        animation.tick += 1;
        animation.cardFlip = Math.floor(animation.tick / 20);

        if (animation.tick > 120) {
            animation.tick = 0;
            state = 'CardChangePoker';
        }
    } else if (state === 'ResultAnimationPoker') {
        animation.tick += 1;

        if (animation.tick > 30) {
            animation.dealerCardFlip = true;
        }

        if (animation.tick > 60) {
            animation.tick = 0;
            state = 'ResultPoker';
        }
    }
}

function mouseUpCardMiniGame(x, y) {
    if (paused === false) {
        if (state === 'Start') {
            if (pointInsideRect(x, y, UICardMiniGame.skipButton[0], UICardMiniGame.skipButton[1], UICardMiniGame.skipButton[2], UICardMiniGame.skipButton[3])) {
                if (gameType === 'Poker') {
                    state = 'StartAnimationPoker';
                    animation.tick = 0;
                    dealerDeckGeneratePoker('MiniGame');
                    playerDeckGeneratePoker('MiniGame');
                    dealer.deck = shuffle(dealer.deck);
                    playerCard.deck = shuffle(playerCard.deck);
                    playerHandGeneratePoker();
                    dealerHandGeneratePoker();
                }
            }
        } else if (state === 'CardChangePoker') {
            for (var i = 0; i < 5; i++) {
                if (pointInsideRect(x, y, UICardMiniGame.playerHandPoker[i][0], UICardMiniGame.playerHandPoker[i][1], UICardMiniGame.cardSize[0], UICardMiniGame.cardSize[1])) {
                    if (playerCard.handChange[i] === true) {
                        playerCard.handChange[i] = false;
                    } else if (playerCard.handChange[i] === false) {
                        playerCard.handChange[i] = true;
                    }
                }
            }

            if (pointInsideRect(x, y, UICardMiniGame.doneButton[0], UICardMiniGame.doneButton[1], UICardMiniGame.doneButton[2], UICardMiniGame.doneButton[3])) {
                playerHandChangePoker();
                animation.dealerCardFlip = false;
                state = 'ResultAnimationPoker';
            }
        }

        if (pointInsideRect(x, y, UICardMiniGame.menuButton[0], UICardMiniGame.menuButton[1], UICardMiniGame.menuButton[2], UICardMiniGame.menuButton[3])) {
            paused = true;
        }
    } else if (paused === true) {
        if (pointInsideRect(x, y, UICardMiniGame.resumeButton[0], UICardMiniGame.resumeButton[1], UICardMiniGame.resumeButton[2], UICardMiniGame.resumeButton[3])) {
            paused = false;
        } else if (pointInsideRect(x, y, UICardMiniGame.exitButton[0], UICardMiniGame.exitButton[1], UICardMiniGame.exitButton[2], UICardMiniGame.exitButton[3])) {
            paused = false;
            scene = 'Title';
            state = '';
        }
    }
}
