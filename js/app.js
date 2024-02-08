const redPiece = "red piece.jpeg"
const blackPiece = "brown piece.jpeg"
let PieceCurrent=[]
const playerDisplay = document.querySelector("#display");
let playTurn = 'black'
playerDisplay.textContent = 'black'
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
function createPiece(x, y) {
    if (x < 3 && (x + y) % 2 !== 0) {
        let piece = new Pieces(x, y, redPiece, true);
        let pieceId = 8*x+y; 
        piece.id = pieceId;
        PieceCurrent.push(piece);
        return piece;
    } else if (x > 4 && (x + y) % 2 !== 0) {
        let piece = new Pieces(x, y, blackPiece, true);
        let pieceId = 8*x+y; 
        piece.id = pieceId;
        PieceCurrent.push(piece);
        return piece;
    }
    return null;
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
        squareElement.setAttribute('id', 8*x+y);
        //set up color
        squareElement.style.backgroundColor = square.color;

        //create initial piece based on x, y
        createPiece(x,y)
        

        gameBoard.appendChild(squareElement)
        }
        

    }
    console.log(squares);
    console.log(PieceCurrent)

    
}
function linkPieceBoard(PieceCurrent) {
    PieceCurrent.forEach(piece => {
        let squareElement = document.getElementById(8*piece.x+piece.y);
        if (squareElement) {
            let pieceElement = document.createElement("img");
            // pieceElement.id = piece.color
            pieceElement.src = piece.color;
            
            //give Id to piece element
            if (piece.color === "red piece.jpeg") {
                pieceElement.id = "red";
            } else if (piece.color === "brown piece.jpeg") {
                pieceElement.id = "black";
            }
            pieceElement.draggable = true
          
            pieceElement.classList.add("piece");
            squareElement.appendChild(pieceElement);
        }
    });
}

// Excuting functions
//1. we set up a 8*8 gameboard.
createGameBoard(8,8);
//2. we set up pieces red and brown,put them on game board

linkPieceBoard(PieceCurrent);
// dragPiece(square)

const allSquares = document.querySelectorAll( ".square")
console.log(allSquares)

allSquares.forEach(square =>{
    square.addEventListener('dragstart', dragStart)
    square.addEventListener('dragover', dragOver)
    square.addEventListener('drop', dragDrop)
})

//get the ID of dragStart piece
let startPositionId
let draggedELement
function dragStart(e){
    startPositionId = e.target.parentNode.getAttribute('id');
    draggedELement = e.target
}
function dragOver(e){
    e.preventDefault()//make sure this event fired once finish, no need record
}

function dragDrop(e){
    e.stopPropagation()
    console.log(draggedELement)
    const oppoGo = playTurn === 'red'? 'black' :'red'
    const correctGo = e.target.querySelector("img[id = 'playerTurn']")
    const valid = checkIfValid(e.target)
    

    //to judge if the square is empty or contain piece
    const taken= e.target.classList.contains('piece') 
    console.log(taken)
    console.log(valid)
    if(taken){
        return
        }
    if(valid){
        //attach piece in new square location
        e.target.append(draggedELement)
        changePlayer()
        return
        }
   
    }
    
//get the start and target position, also give color piece]
function checkIfValid(target){
    const startId =Number(startPositionId);
    const targetId = Number(target.getAttribute('id'))
    const piece = draggedELement.id
    console.log('startId',startId)
    console.log('targetId',targetId)
    console.log('pieceId',piece)
    if ((startId + 14 === targetId && document.getElementById(startId+7)  ) || 
    (startId + 18 === targetId) || 
    (startId+7 === targetId) ||
        (startId+9 === targetId)
    ) {
    return true;
}}


function changePlayer(){
    if (playTurn === "black"){
        reverseId();
        playTurn = "red"
        playerDisplay.textContent = 'red'
    } else{
        revertId()
        playTurn = "black"
        playerDisplay.textContent = "black"
    }
}

function reverseId(){
    const allSquares = document.querySelectorAll(".square")
    allSquares.forEach((square,i) => 
        square.setAttribute('id',63-i))
} 

function revertId(){
    const allSquares = document.querySelectorAll(".square")
    allSquares.forEach((square,i) => 
        square.setAttribute('id',i))

}