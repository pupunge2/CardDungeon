var canvas;
var context;
var canvasRect;

var game = null;
var scene = 'Title';
var state = '';
var gameType = 'Poker';
var paused = false;

var animation = {
    tick : 0,
    cardFlip : 0,
    dealerCardFlip : false,
};

var dealer = {
    deck : [],
    hand : [],
    handChange : [],
};

var playerCard = {
    deck : [],
    hand : [],
    handChange : [],
};
