
const dice = document.getElementById('dice');
const rollDice = document.getElementById('rolldice');
const hold = document.getElementById('hold');
const newGame = document.getElementById('newgame');

var currentPlayer1 = 0;
var globalPlayer1 = 0;
var currentPlayer2 = 0;
var globalPlayer2 = 0;

rollDice.addEventListener('click', ()=> {
    var randomNumber = Math.floor(Math.random()*6) + 1;
    dice.innerHTML = '<img src="assets/images/'+randomNumber+'.jpg" alt="dice"/>';
    var activePlayer = document.querySelector('.player-active');
    if (randomNumber === 1) {
        currentPlayer1 = 0;
        document.getElementById('score-player-1').innerHTML=currentPlayer1;
        switchActive();
        resetCurrentPoints();
    } else {
        addPointsToCurrent(activePlayer.id, randomNumber);
    }
});

hold.addEventListener('click',()=> {
    var activePlayer = document.querySelector('.player-active');
    if (activePlayer.id === 'player1'){
    globalPlayer1 += currentPlayer1;
    document.getElementById('global-score-player-1').innerHTML=globalPlayer1;
    switchActive();
    resetCurrentPoints();
    winner(); 
    } else {
    globalPlayer2 += currentPlayer2;
    document.getElementById('global-score-player-2').innerHTML=globalPlayer2;
    switchActive();
    resetCurrentPoints();
    winner(); 
    }  
});

newGame.addEventListener('click', ()=> {
    playNewGame();  
});

function playNewGame() {
    currentPlayer1 = 0;
    document.getElementById('score-player-1').innerHTML=currentPlayer1;
    currentPlayer2 = 0;
    document.getElementById('score-player-1').innerHTML=currentPlayer1;
    globalPlayer1 = 0;
    document.getElementById('global-score-player-1').innerHTML=globalPlayer1;
    globalPlayer2 = 0;
    document.getElementById('global-score-player-2').innerHTML=globalPlayer2;
};

function addPointsToCurrent(player, points) {
    if (player === 'player1') {
        currentPlayer1 += points;
        document.getElementById('score-player-1').innerHTML=currentPlayer1;
    } else {
        currentPlayer2 += points;
        document.getElementById('score-player-2').innerHTML=currentPlayer2;
    }
};

function switchActive() {
    if (document.querySelector('#player1').classList.contains('player-active')){
        document.querySelector('#player1').classList.remove('player-active');
        document.querySelector('#player2').classList.add('player-active');
    } else { 
        document.querySelector('#player2').classList.remove('player-active');
        document.querySelector('#player1').classList.add('player-active');
    }
};

function resetCurrentPoints() {
    currentPlayer1 = 0;
    document.getElementById('score-player-1').innerHTML=currentPlayer1;
    currentPlayer2 = 0;
    document.getElementById('score-player-2').innerHTML=currentPlayer2;
};

function winner() {
    if (globalPlayer1 >= 100) {
        alert('Player 1 win with ' + globalPlayer1 +' points!');
    } else if (globalPlayer2 >= 100) {
        alert('Player 2 win with ' + globalPlayer2 +' points!');
    }
}
