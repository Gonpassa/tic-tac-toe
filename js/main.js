//Practice objects with tic-tac-toe 
let board;
let game;
let player1;
let player2;
document.querySelector('.start').addEventListener('click', startGame)

function startGame(){
    if(board != undefined){
        board.clearBoard()
    }
    board = new Board
    game = new Game
    player1 = new Player('x')
    player2 = new Player('o')
    board.populateBoard()
}

