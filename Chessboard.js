class Board {
    constructor() {
        this.pieces = [];
    }

    initializeBoard() {

        for (var r = 0; r < 8; r++) {
            var col = "";
            for (var c = 0; c < 8; c++) {
                col += "<td id='" + r + "_" + c + "'></td>";
            }
            $("#chessboard").append("<tr>" + col + "</tr>");
        }

        // for (var i = 0; i < Object.keys(ColorEnum).length; i++) {
        //     var color = Object.keys(ColorEnum)[i];

        //pawn position
        for (let j = 0; j < 8; j++) {
            let pawnWhite = new Piece([1, j], ColorEnum.white, PieceTypeEnum.pawn);
            let pawnBlack = new Piece([6, j], ColorEnum.black, PieceTypeEnum.pawn);
            this.pieces.push(pawnWhite);
            this.pieces.push(pawnBlack);
        }

        //rook position
        let rookWhite1 = new Piece([0, 0], ColorEnum.white, PieceTypeEnum.rook);
        let rookWhite2 = new Piece([0, 7], ColorEnum.white, PieceTypeEnum.rook);
        let rookBlack1 = new Piece([7, 0], ColorEnum.black, PieceTypeEnum.rook);
        let rookBlack2 = new Piece([7, 7], ColorEnum.black, PieceTypeEnum.rook);

        this.pieces.push(rookWhite1);
        this.pieces.push(rookWhite2);
        this.pieces.push(rookBlack1);
        this.pieces.push(rookBlack2);

        let bishopWhite1 = new Piece([0, 2], ColorEnum.white, PieceTypeEnum.bishop);
        let bishopWhite2 = new Piece([0, 5], ColorEnum.white, PieceTypeEnum.bishop);
        let bishopBlack1 = new Piece([7, 2], ColorEnum.black, PieceTypeEnum.bishop);
        let bishopBlack2 = new Piece([7, 5], ColorEnum.black, PieceTypeEnum.bishop);

        this.pieces.push(bishopWhite1);
        this.pieces.push(bishopWhite2);
        this.pieces.push(bishopBlack1);
        this.pieces.push(bishopBlack2);

        let knightWhite1 = new Piece([0, 1], ColorEnum.white, PieceTypeEnum.knight);
        let knightWhite2 = new Piece([0, 6], ColorEnum.white, PieceTypeEnum.knight);
        let knightBlack1 = new Piece([7, 1], ColorEnum.black, PieceTypeEnum.knight);
        let knightBlack2 = new Piece([7, 6], ColorEnum.black, PieceTypeEnum.knight);

        this.pieces.push(knightWhite1);
        this.pieces.push(knightWhite2);
        this.pieces.push(knightBlack1);
        this.pieces.push(knightBlack2);

        let kingWhite = new Piece([0, 3], ColorEnum.white, PieceTypeEnum.king);
        let kingBlack = new Piece([7, 3], ColorEnum.black, PieceTypeEnum.king);

        this.pieces.push(kingWhite);
        this.pieces.push(kingBlack);

        let queenWhite = new Piece([0, 4], ColorEnum.white, PieceTypeEnum.queen);
        let queenBlack = new Piece([7, 4], ColorEnum.black, PieceTypeEnum.queen);

        this.pieces.push(queenWhite);
        this.pieces.push(queenBlack);

        this.visualizeBoard();

        console.log('initialization complete')
    }

    visualizeBoard() {
        for (let i = 0; i < this.pieces.length; i++) {
            var piece = this.pieces[i];
            var pos = piece.position;
            $('#' + pos[0] + '_' + pos[1]).html(piece.toString());
        }
    }

}

$(document).ready(function () {
    var chessboardTest = new Board();
    chessboardTest.initializeBoard();
});
