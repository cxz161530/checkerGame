const redPiece = "brown piece.jpeg"
const blackPiece = "red piece.jpeg"
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
// pieceInitial function used to initial all pieces in initial location
function pieceInitial(x, y) {
    if (x < 3 && (x + y) % 2 !== 0) {
        return `url('${redPiece}')`;
    } else if (x > 4 && (x + y) % 2 !== 0) {
        return `url('${blackPiece}')`;
    }
    return "";
}


//GameBoard function used to create gameBoard, squares array to hold all squares info
//it will 1: create board in browser,2 make an array storing each square info 
function createGameBoard(row, columns){
    let gameBoard = document.getElementById("gameBoard");
    let squares = [];
    for(let x = 0; x<row; x++){
        for(let y = 0; y<columns; y++){
        //color decided by x,y sum value, even is black, odd is white
        let color = (((x+y)%2)===0) ? 'white' :'black';
        let square = new GameBoardSquare(x, y, color);
        squares.push(square);
        //create div for each obj created
        let squareElement = document.createElement("div")
        squareElement.classList.add("square");
        //set up a uniq id for each square
        // let squareId = x*8+y;
        squareElement.setAttribute('id', `${x}${y}`);
        //set up color
        squareElement.style.backgroundColor = square.color;

        //put Piece into it
        squareElement.style.backgroundImage = pieceInitial(x,y)
        



        gameBoard.appendChild(squareElement)
        }

    }
    console.log(squares);

    
}





// Excuting functions
//1. we set up a 8*8 gameboard.
createGameBoard(8,8);
//2. we set up pieces red and brown



