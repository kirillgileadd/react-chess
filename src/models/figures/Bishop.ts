import Figure, {FiguresNames} from "./Figure";
import {Colors} from "../Colors";
import Cell from "../Cell";
import whiteBishop from "../../assets/white-bishop.svg"
import blackBishop from "../../assets/black-bishop.svg"

export class Bishop extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.WHITE ? whiteBishop : blackBishop
        this.name = FiguresNames.BISHOP
    }
}