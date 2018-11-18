const PieceTypeEnum = Object.freeze({
    pawn: 0, rook: 1, knight: 2, bishop: 3, queen: 4, king: 5
});

const ColorEnum = Object.freeze({
    white: 0, black: 1
});

class Piece {
    constructor(position, color, type) {
        this.position = position;
        this.color = color;
        this.type = type;
    }

    toString() {
        let pieceName = ''
        switch (this.type) {
            case PieceTypeEnum.pawn:
                pieceName = 'p'
                break;
            case PieceTypeEnum.rook:
                pieceName = 'r'
                break;
            case PieceTypeEnum.knight:
                pieceName = 'n'
                break;
            case PieceTypeEnum.bishop:
                pieceName = 'b'
                break;
            case PieceTypeEnum.queen:
                pieceName = 'q'
                break;
            case PieceTypeEnum.king:
                pieceName = 'k'
                break;
            default:
                break;
        }
        return pieceName;
    }
}
