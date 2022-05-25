import Figure, {FiguresNames} from "./Figure";
import {Colors} from "../Colors";
import Cell from "../Cell";
import whiteKnight from "../../assets/white-knight.svg"
import blackKnight from "../../assets/black-knight.svg"

export class Knight extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.WHITE ? whiteKnight : blackKnight
        this.name = FiguresNames.KNIGHT
    }
}