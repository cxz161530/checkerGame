//constants
const pieceImg = {
    redPiece: 'img/brown piece.jpeg',
    blackPiece:'img/red piece.jpeg'
}


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
function pieceInitial(squareId){
    if(squareId<24 && squareId%2!==0){
        return pieceImg.redPiece
    }else if(squareId>40 &&squareId%2 !==0){
        return pieceImg.blackPiece
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
        let squareId = x*8+y;
        squareElement.setAttribute('id', squareId);
        //set up color
        squareElement.style.backgroundColor = square.color;
        console.log(pieceInitial(squareId))
        //put Piece into it
        squareElement.style.backgroundImage = pieceInitial(squareId);
        



        gameBoard.appendChild(squareElement)
        }

    }
    console.log(squares);

    
}





// Excuting functions
//1. we set up a 8*8 gameboard.
createGameBoard(8,8);
//2. we set up pieces red and brown

