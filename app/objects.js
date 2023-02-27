class Board{
    constructor(){
        this.grid = []
    }
    populateBoard(){
        for(let i = 0; i < 9; i++){
            this.grid.push(new Cell(i))
        }
        this.grid.forEach(cell => {
            const element = document.querySelector(cell.id)
            element.addEventListener('click', function(){
                game.playTurn(cell)
                
            })
        })
    }
}

class Cell{
    constructor(id){
        this.state = ''
        this.id = '#cell'+id
    }
    setState(state){
        this.state = state
        document.querySelector(this.id).innerText = state
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
        if(cell.state != ''){
            return console.log('Space Occupied')
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