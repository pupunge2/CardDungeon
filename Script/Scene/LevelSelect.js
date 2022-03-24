var UILevelSelect = {
    titleText : [8, 60],
    backButton : [1160, 40, 80, 80],

    list : [
        [160, 160, 160, 160],
        [360, 160, 160, 160],
        [560, 160, 160, 160],
        [360, 360, 160, 160],
        [360, 360, 160, 160],
        [360, 560, 160, 160],
    ],
};

function loopLevelSelect() {
    displayLevelSelect();
}

function displayLevelSelect() {
    context.fillStyle = 'Black';
    context.strokeStyle = 'Black';
    context.font = '60px Opensans';
    context.lineWidth = 2;

    context.clearRect(0, 0, 1280, 800); 

    context.fillText('Level Select', UILevelSelect.titleText[0], UILevelSelect.titleText[1]);
    context.strokeRect(UILevelSelect.titleText[0], UILevelSelect.titleText[1], UILevelSelect.titleText[2], UILevelSelect.titleText[3]);
    context.strokeRect(UILevelSelect.backButton[0], UILevelSelect.backButton[1], UILevelSelect.backButton[2], UILevelSelect.backButton[3]);
}

function mouseUpLevelSelect(x, y) {
    if (state === '') {
        if (pointInsideRect(x, y, UILevelSelect.backButton[0], UILevelSelect.backButton[1], UILevelSelect.backButton[2], UILevelSelect.backButton[3])) {
            scene = 'Title';
        }
    }
}
