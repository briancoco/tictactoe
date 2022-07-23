let gameData = {
    board: new Array(9),
    player1: '',
    player2: '',
    currentPlayer: '',
};

const body = document.querySelector('body');
const players = document.querySelector('.players');
//body.removeChild(players);

const confirm = document.querySelector('#confirm');
confirm.addEventListener('click', () => {
    gameData.player1 = document.querySelector('.player1').value;
    gameData.player2 = document.querySelector('.player2').value;
    gameData.currentPlayer = gameData.player1;
    body.removeChild(players);
    
});

const board = document.querySelector('.board');
for(let i = 0; i < 9; i++) {
    const div = document.createElement('div');
    div.classList.add(`b${i}`);
    div.classList.add('box');
    board.appendChild(div);
    div.addEventListener('click', () => {
        div.textContent = "X";
    });
}

