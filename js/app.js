//classes

class GameBoardSquare{
    constructor(x,y,color){
        this.x=x;
        this.y = y;
        this.color = color
    }
}


//functions
//function used to create gameBoard, squares array to hold all squares info
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
        //set up color
        squareElement.style.backgroundColor = square.color;
        gameBoard.appendChild(squareElement)
        }

    }
    console.log(squares);
    
}

createGameBoard(8,8);

