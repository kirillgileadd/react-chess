import Figure, {FiguresNames} from "./Figure";
import {Colors} from "../Colors";
import Cell from "../Cell";
import whiteKing from "../../assets/white-king.svg"
import blackKing from "../../assets/black-king.svg"

export class King extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.WHITE ? whiteKing : blackKing
        this.name = FiguresNames.KING
    }
}