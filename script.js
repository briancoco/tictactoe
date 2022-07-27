let gameData = {
    board: new Array(9),
    player1: '',
    player2: '',
    currentPlayer: '',
};
const turn = document.querySelector('.turn');
const body = document.querySelector('body');
const players = document.querySelector('.players');
//body.removeChild(players);

const confirm = document.querySelector('#confirm');
confirm.addEventListener('click', () => {
    gameData.player1 = document.querySelector('.player1').value;
    gameData.player2 = document.querySelector('.player2').value;
    gameData.currentPlayer = gameData.player1;
    turn.textContent = `${gameData.currentPlayer}'s turn`;
    body.removeChild(players);
    
});

const board = document.querySelector('.board');
for(let i = 0; i < 9; i++) {
    const div = document.createElement('div');
    div.classList.add(`b${i}`);
    div.classList.add('box');
    board.appendChild(div);
    div.addEventListener('click', () => {
        if(gameData.currentPlayer == gameData.player1) {
            div.textContent = 'X';
            gameData.board[i] = "X";
            if(!winner('X') && boardNotFull(gameData.board)) {
                gameData.currentPlayer = gameData.player2;
                turn.textContent = `${gameData.currentPlayer}'s turn`;
            }
            else {
                gameData.currentPlayer = '';
                if(!boardNotFull(gameData.board)) {
                    turn.textContent = 'Tie!';
                }
            }
        }
        else if(gameData.currentPlayer == gameData.player2) {
            div.textContent = 'O';
            gameData.board[i] = "O";
            if(!winner('O') && boardNotFull(gameData.board)) {
                gameData.currentPlayer = gameData.player1;
                turn.textContent = `${gameData.currentPlayer}'s turn`;
            }
            else {
                gameData.currentPlayer = '';
                if(!boardNotFull(gameData.board)) {
                    turn.textContent = 'Tie!';
                }
            }
        }

    });
}


function winner(playerSymbol) {
    let win = false;
    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], 
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
        ];
    winCombos.forEach((combo, index) => {
        if(gameData.board[combo[0]] == playerSymbol && gameData.board[combo[1]] == playerSymbol && gameData.board[combo[2]] == playerSymbol) {
            for(let i = 0; i < 9; i++) {
                const div = document.querySelector(`.b${i}`);
                //console.log(div);
                if (i === combo[0] || i === combo[1] || i === combo[2]) {
                    div.classList.add('winner');
                    turn.textContent = `${gameData.currentPlayer} wins!`;
                    
                }
            }
            win = true;
        }

    });
    return win;
}

function boardNotFull(board) {
    let notFull = board.includes(undefined);
    if(notFull) {
        return true;
    }
    return false;
}