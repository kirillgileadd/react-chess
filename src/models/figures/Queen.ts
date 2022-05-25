import Figure, {FiguresNames} from "./Figure";
import {Colors} from "../Colors";
import Cell from "../Cell";
import whiteQueen from "../../assets/white-queen.svg"
import blackQueen from "../../assets/black-queen.svg"

export class Queen extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.WHITE ? whiteQueen : blackQueen
        this.name = FiguresNames.QUEEN
    }
}