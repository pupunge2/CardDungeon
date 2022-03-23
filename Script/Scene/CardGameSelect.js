var UICardGameSelect = {
    titleText : [8, 60],
    backButton : [1160, 40, 80, 80],

    list : [
        [160, 160, 160, 160],
        [320, 160, 160, 160],
        [480, 160, 160, 160],
        [160, 320, 160, 160],
        [320, 320, 160, 160],
        [480, 320, 160, 160]
    ],
};

function loopCardGameSelect() {
    displayCardGameSelect();
}

function displayCardGameSelect() {
    context.fillStyle = 'Black';
    context.strokeStyle = 'Black';
    context.font = '60px Opensans';
    context.lineWidth = 2;

    context.clearRect(0, 0, 1280, 800); 

    context.fillText('Card Game Select', UICardGameSelect.titleText[0], UICardGameSelect.titleText[1]);
    context.strokeRect(UICardGameSelect.backButton[0], UICardGameSelect.backButton[1], UICardGameSelect.backButton[2], UICardGameSelect.backButton[3]);
        
    for (var i = 0; i < 6; i++) {
        context.strokeRect(UICardGameSelect.list[i][0], UICardGameSelect.list[i][1], UICardGameSelect.list[i][2], UICardGameSelect.list[i][3]);
    }   
}

function mouseUpCardGameSelect(x, y) {
    if (state === '') {
        if (pointInsideRect(x, y, UICardGameSelect.backButton[0],UICardGameSelect.backButton[1], UICardGameSelect.backButton[2], UICardGameSelect.backButton[3])) {
            scene = 'Title';
        }

        for (var i = 0; i < 6; i++) {
            if (pointInsideRect(x, y, UICardGameSelect.list[i][0], UICardGameSelect.list[i][1], UICardGameSelect.list[i][2], UICardGameSelect.list[i][3])) {
                scene = 'CardMiniGame';
                state = 'Start';
                gameType = 'Poker';
            }
        }
    }
}
