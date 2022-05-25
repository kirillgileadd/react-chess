import Figure, {FiguresNames} from "./Figure";
import {Colors} from "../Colors";
import Cell from "../Cell";
import whiteRook from "../../assets/white-rook.svg"
import blackRook from "../../assets/black-rook.svg"

export class Rook extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.WHITE ? whiteRook : blackRook
        this.name = FiguresNames.ROOK
    }
}