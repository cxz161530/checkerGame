//classes

class GameBoardSquare{
    constructor(x,y,color){
        this.x=x;
        this.y = y;
        this.color = color
    }
}

class Pieces{
    constructor(x,y,color, alive){
        this.x=x;
        this.y=y;
        this.color = color;
        this.alive = alive;
    } 
    }

//functions
//GameBoard function used to create gameBoard, squares array to hold all squares info
//it will 1: create board in browser,2 make an array storing each square info 
function createGameBoard(row, columns){
    let gameBoard = document.getElementById("gameBoard");
    let squares = [];
    for(let x = 0; x<row; x++){
        for(let y = 0; y<columns; y++){
        //color decided by x,y sum value, even is black, odd is white
        let color = (((x+y)%2)===0) ? 'black' :'white';
        let square = new GameBoardSquare(x, y, color);
        squares.push(square);
        //create div for each obj created
        let squareElement = document.createElement("div")
        squareElement.classList.add("square");
        //set up a uniq id for each square
        squareElement.setAttribute('id', (x*8 + y));
        //set up color
        squareElement.style.backgroundColor = square.color;
        gameBoard.appendChild(squareElement)
        }

    }
    console.log(squares);
    
}
//piece function create pieces on gameboard in black and right, keep track if the piece is alive or not
function createPiece(row, column){
    let redPiece = document.getElementById(""); 
    const redStartId = [1,3,5,7,9,11,13,15,17,19,21,23] 
    const blackStartId = [63,61,59,57,55,53,51,49,47,45,43,41]
//need set up bacl and red pieces into those location to initiate , using id to link
    
}




// Excuting functions
//1. we set up a 8*8 gameboard.
createGameBoard(8,8);
//2. we set up pieces red and brown

