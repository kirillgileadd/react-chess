import Board from "./Board";
import {Colors} from "./Colors";
import Figure from "./Figure";

export default class Cell {
    readonly x: number
    readonly y: number
    readonly color: Colors
    figure: Figure | null
    board: Board
    available: boolean
    id: number

    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
        this.x = x
        this.y = y
        this.board = board
        this.figure = figure
        this.color = color
        this.available = false
        this.id = Math.random()
    }
}