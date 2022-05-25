import Figure, {FiguresNames} from "./Figure";
import {Colors} from "../Colors";
import Cell from "../Cell";
import whitePawn from "../../assets/white-pawn.svg"
import blackPawn from "../../assets/black-pawn.svg"

export class Pawn extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.WHITE ? whitePawn : blackPawn
        this.name = FiguresNames.PAWN
    }
}