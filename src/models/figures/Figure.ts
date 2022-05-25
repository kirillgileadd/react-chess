import {Colors} from "../Colors";
import Cell from "../Cell";
import logo from "../../assets/black-king.svg"

export enum FiguresNames {
    FIGURE = "FIGURE",
    KING = "KING",
    PAWN = "PAWN",
    BISHOP = "BISHOP",
    QUEEN = "QUEEN",
    ROOK = "ROOK",
    KNIGHT = "KNIGHT",
}

export default class Figure {
    color: Colors
    cell: Cell
    name: FiguresNames
    id: number
    logo: typeof logo | null


    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this
        this.id = Math.random()
        this.name = FiguresNames.FIGURE
        this.logo = null
    }

    canMove(target: Cell): boolean {
        if(target.figure?.color === this.color) {
            return false
        }
        if(target.figure?.name === FiguresNames.KING) {
            return false
        }
        return true
    }

    moveFigure(target: Cell) {

    }
}