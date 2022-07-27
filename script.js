let gameData = {
    board: new Array(9),
    player1: '',
    player2: '',
    currentPlayer: '',
};


const turn = document.querySelector('.turn');
const body = document.querySelector('body');
const players = document.querySelector('.players');


const confirm = document.querySelector('#confirm');
confirm.addEventListener('click', () => {
    //adds names to game data
    gameData.player1 = document.querySelector('.player1').value;
    gameData.player2 = document.querySelector('.player2').value;
    //1st player goes first by default
    gameData.currentPlayer = gameData.player1;
    turn.textContent = `${gameData.currentPlayer}'s turn`;
    //removes player selection box
    body.removeChild(players);
    
});

//board creation
const board = document.querySelector('.board');
for(let i = 0; i < 9; i++) {
    const div = document.createElement('div');
    div.classList.add(`b${i}`);
    div.classList.add('box');
    board.appendChild(div);
    div.addEventListener('click', () => {
        if(gameData.currentPlayer == gameData.player1) {
            //displays val on board
            div.textContent = 'X';
            //adds val to board data
            gameData.board[i] = "X";
            gameLogic('X'); 
        }
        else if(gameData.currentPlayer == gameData.player2) {
            div.textContent = 'O';
            gameData.board[i] = "O";
            gameLogic('O');
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
        //checks board for winning combos
    winCombos.forEach((combo) => {
        if(gameData.board[combo[0]] == playerSymbol && gameData.board[combo[1]] == playerSymbol && gameData.board[combo[2]] == playerSymbol) {
            //if winning combo present, add green background and print win message
            for(let i = 0; i < 9; i++) {
                const div = document.querySelector(`.b${i}`);
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
    //if board is not full (undefined) return true
    let notFull = board.includes(undefined);
    if(notFull) {
        return true;
    }
    return false;
}

function gameLogic(symbol) {

    if(symbol == 'X') {
        if(!winner('X') && boardNotFull(gameData.board)) {
            //continues game if not won or tied
            gameData.currentPlayer = gameData.player2;
            turn.textContent = `${gameData.currentPlayer}'s turn`;
        }
        else {
            //ends game by disabling event listener 
            gameData.currentPlayer = '';
            if(!boardNotFull(gameData.board)) {
                turn.textContent = 'Tie!';
            }
        }
    }
    //same thing for other symbol
    else if(symbol == 'O') {
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
    
}