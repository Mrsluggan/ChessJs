let chessBoard = document.getElementById("ChessBoard");
let currentClickedIndex = null;
let boardArray = new Array(64).fill(null);
let currentPawn;
let selectedPawn;
var originalSquare;

const board = document.createElement("div");
board.setAttribute("id", "board");

function startGame() {
    for (let index = 0; index < 64; index++) {
        const chessBoardCells = document.createElement("div");
        chessBoardCells.setAttribute("class", "boardCell");
        chessBoardCells.setAttribute("cellIndex", index);

        addPawns(index, chessBoardCells, boardArray);

        chessBoardCells.addEventListener("click", cellClicked);
        board.appendChild(chessBoardCells);
    }
    chessBoard.appendChild(board);
}

function cellClicked() {
    const cellIndex = event.target.getAttribute("cellIndex");
    movePiece(cellIndex);
}

function movePiece(index) {

    if (currentClickedIndex === null) {
        currentClickedIndex = index;
        originalSquare = document.querySelector('.boardCell[cellIndex="' + currentClickedIndex + '"]');

        if (boardArray[currentClickedIndex] == "pawn") {
            originalSquare.style.backgroundColor = 'lightGreen';
            currentPawn = event.target.innerText;
        }

    } else {

        if (currentClickedIndex != index) {
            if (currentPawn == originalSquare.innerHTML) {

                if (boardArray[index] == "pawn") {

                    console.log("detta är fiende");
                    originalSquare.style.backgroundColor = 'black';
                    boardArray[index] = null;
                    event.target.innerHTML = null;



                }
                boardArray[index] = boardArray[currentClickedIndex];
                boardArray[currentClickedIndex] = null;

                originalSquare.style.backgroundColor = 'black';
                originalSquare.innerHTML = null;

                event.target.innerHTML = currentPawn
            }
            
        }else{
            originalSquare.style.backgroundColor = 'black';

        }

        currentPawn = null;
        currentClickedIndex = null;
    }


} 
function addPawns(index, chessBoardCells, boardArray) {

    //Rita svartas pawns
    if (index <= 15 && index >= 8) {
        boardArray[index] = "pawn";
        chessBoardCells.innerHTML = "♙"; // Black pawn emoji
    }

    //Rita Svarta Kung
    if (index == 3) {
        boardArray[index] = "pawn";
        chessBoardCells.innerHTML = "♔"; // Black king emoji
    }

    //Rita Svarta drottning
    if (index == 4) {
        boardArray[index] = "pawn";
        chessBoardCells.innerHTML = "♕"; // Black queen emoji
    }

    //Rita Svarta torn
    if (index == 0 || index == 7) {
        boardArray[index] = "pawn";
        chessBoardCells.innerHTML = "♖"; // Black rook emoji
    }

    //Rita svarta knäckt
    if (index == 1 || index == 6) {
        boardArray[index] = "pawn";
        chessBoardCells.innerHTML = "♗"; // Black bishop emoji
    }

    //Rita svarta häst
    if (index == 2 || index == 5) {
        boardArray[index] = "pawn";
        chessBoardCells.innerHTML = "♘"; // Black knight emoji
    }

    // ---------------------------------

    //Rita vitas pawns
    if (index <= 55 && index >= 48) {
        boardArray[index] = "pawn";
        chessBoardCells.innerHTML = "♟︎"; // White pawn emoji
    }

    //Rita vita drottning
    if (index == 59) {
        boardArray[index] = "pawn";
        chessBoardCells.innerHTML = "♛"; // White queen emoji
    }

    //Rita vita Kung
    if (index == 60) {
        boardArray[index] = "pawn";
        chessBoardCells.innerHTML = "♚"; // White king emoji
    }

    //Rita vita torn
    if (index == 56 || index == 63) {
        boardArray[index] = "pawn";
        chessBoardCells.innerHTML = "♜"; // White rook emoji
    }

    //Rita Vita Häst
    if (index == 57 || index == 62) {
        boardArray[index] = "pawn";
        chessBoardCells.innerHTML = "♞"; // White knight emoji
    }

    //Rita Vita knäckt
    if (index == 58 || index == 61) {
        boardArray[index] = "pawn";
        chessBoardCells.innerHTML = "♝"; // White bishop emoji
    }
}



startGame();
