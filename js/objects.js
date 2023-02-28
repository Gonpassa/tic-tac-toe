class Board{
    constructor(){
        this.grid = []
    }
    populateBoard(){
        for(let i = 0; i < 9; i++){
            this.grid.push(new Cell(i))
        }
        this.grid.forEach(cell => {
            const boundPlayCell = cell.playCell.bind(cell)
            cell.boundPlayCell = boundPlayCell
            cell.element.addEventListener('click', cell.boundPlayCell)
            console.log('populatingcell')
        })
    } 
    clearBoard() {
        this.grid.forEach((cell) => {
            console.log('hi')
            cell.element.innerText = "";
            cell.element.removeEventListener("click", cell.boundPlayCell);
        });
    }
}


class Cell{
    constructor(id){
        this.state = ''
        this.id = '#cell'+id
        this.element = document.querySelector(this.id)
        this.boundPlayCell = null;
    }
    setState(state){
        this.state = state
        document.querySelector(this.id).innerText = state
    }
    playCell(){
        game.playTurn(this)
    }

}

class Player{
    constructor(symbol){
        this.symbol = symbol
    }
}
 
//Handles game logic, and user input
class Game{
    constructor(){
        this.turn = 1

    }
    playTurn(cell){
        console.log(cell)
        if(cell.state != ''){
            return console.log('space occupied')
        }
        if(this.turn){
            this.turn--;
            cell.setState(player1.symbol)
        }else{
            this.turn++;
            cell.setState(player2.symbol)
        }
    }
}