
const dice = document.getElementById('dice');
const rollDice = document.getElementById('rolldice');
const hold = document.getElementById('hold');
const newGame = document.getElementById('newgame');

var currentPlayer1 = 0;
var globalPlayer1 = 0;
var currentPlayer2 = 0;
var globalPlayer2 = 0;

//modal rules
displayModalRules();

document.querySelector('.btn-play').addEventListener('click', () => {
    hideModalRules();
})

//modal winner
document.querySelector('.btn-winner').addEventListener('click', () => {
    hideModalWinner();
})

//event roll dice
rollDice.addEventListener('click', ()=> {
    var randomNumber = Math.floor(Math.random()*6) + 1;
    dice.innerHTML = '<img src="assets/images/'+randomNumber+'.jpg" alt="dice"/>';
    var activePlayer = document.querySelector('.player-active');
    if (randomNumber === 1) {
        resetCurrentPoints();
        switchActive();
    } else {
        addPointsToCurrent(activePlayer.id, randomNumber);
    }
});

//event point to global
hold.addEventListener('click',()=> {
    var activePlayer = document.querySelector('.player-active');
    if (activePlayer.id === 'player1') {
        globalPlayer1 += currentPlayer1;
        document.getElementById('global-score-player-1').innerHTML = globalPlayer1;
        switchActive();
    } else {
        globalPlayer2 += currentPlayer2;
        document.getElementById('global-score-player-2').innerHTML = globalPlayer2;
        checkWinner(); 
    }
    resetCurrentPoints();
    checkWinner();
});

//event play new game
newGame.addEventListener('click', ()=> {
    playNewGame();  
});

//  start of functions of application
function playNewGame() {

    currentPlayer1 = currentPlayer2 = 0;
    document.getElementById('score-player-1').innerHTML = currentPlayer1;
    document.getElementById('score-player-2').innerHTML = currentPlayer2;

    globalPlayer1 = globalPlayer2 = 0;
    document.getElementById('global-score-player-1').innerHTML=globalPlayer1;
    document.getElementById('global-score-player-2').innerHTML=globalPlayer2;
};

function addPointsToCurrent(player, points) {
    if (player === 'player1') {
        currentPlayer1 += points;
        document.getElementById('score-player-1').innerHTML = currentPlayer1;
    } else {
        currentPlayer2 += points;
        document.getElementById('score-player-2').innerHTML = currentPlayer2;
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
    currentPlayer1 = currentPlayer2 = 0;
    document.getElementById('score-player-1').innerHTML = currentPlayer1;
    document.getElementById('score-player-2').innerHTML = currentPlayer2;
};

function checkWinner() {
    if (globalPlayer1 >= 100) {
        displayModalWinner('Player 1 wins the game !');
    } else if (globalPlayer2 >= 100) {
        displayModalWinner('Player 2 wins the game !');
    }
}
//end of functions of application

//start functions of rules modal
function displayModalRules() {
    document.querySelector('#js-modal').classList.add('bg-active');
}

function hideModalRules() {
    document.querySelector('#js-modal').classList.remove('bg-active');
}
//end functions of rules modal

//start functions of rules winner
function displayModalWinner(message) {
    document.querySelector('#js-modal-winner').classList.add('bg-active-winner');
    document.querySelector('#js-text').innerHTML = message;
}

function hideModalWinner() {
    document.querySelector('#js-modal-winner').classList.remove('bg-active-winner');
}
//end functions of rules winner