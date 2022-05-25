import Cell from "./Cell";
import {Colors} from "./Colors";
import {Queen} from "./figures/Queen";
import {Pawn} from "./figures/Pawn";
import {Rook} from "./figures/Rook";
import {Bishop} from "./figures/Bishop";
import {Knight} from "./figures/Knight";
import {King} from "./figures/King";

class Board {
    cells: Cell[][] = []

    public initCells() {
        for (let i = 0; i < 8; i++) {
            let row: Cell[] = []
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 !== 0) {
                    row.push(new Cell(this, j, i, Colors.BlACK, null))
                } else {
                    row.push(new Cell(this, j, i, Colors.WHITE, null))
                }
            }
            this.cells.push(row)
        }
    }

    public highlightCells(selectedCell: Cell | null) {
        for(let i = 0; i < this.cells.length; i++) {
            let row = this.cells[i]
            for(let j = 0; j < row.length; j++) {
                const target = row[j]
                target.available = !!selectedCell?.figure?.canMove(target)
            }
        }
    }

    public getCopyBoard(): Board {
        const newBoard = new Board()
        newBoard.cells = this.cells
        return newBoard
    }

    public getCells(x: number, y: number) {
        return this.cells[y][x]
    }

    private addPawn() {
        for (let i = 0; i < 8; i++) {
            new Pawn(Colors.BlACK, this.getCells(i, 1))
            new Pawn(Colors.WHITE, this.getCells(i, 6))
        }
    }

    private addRook() {
        new Rook(Colors.WHITE, this.getCells(0, 7))
        new Rook(Colors.WHITE, this.getCells(7, 7))
        new Rook(Colors.BlACK, this.getCells(0, 0))
        new Rook(Colors.BlACK, this.getCells(7, 0))
    }

    private addBishop() {
        new Bishop(Colors.WHITE, this.getCells(2, 7))
        new Bishop(Colors.WHITE, this.getCells(5, 7))
        new Bishop(Colors.BlACK, this.getCells(2, 0))
        new Bishop(Colors.BlACK, this.getCells(5, 0))
    }

    private addKnight() {
        new Knight(Colors.WHITE, this.getCells(1, 7))
        new Knight(Colors.WHITE, this.getCells(6, 7))
        new Knight(Colors.BlACK, this.getCells(1, 0))
        new Knight(Colors.BlACK, this.getCells(6, 0))
    }
    private addQueen() {
        new Queen(Colors.WHITE, this.getCells(3, 7))
        new Queen(Colors.BlACK, this.getCells(3, 0))
    }
    private addKing() {
        new King(Colors.WHITE, this.getCells(4, 7))
        new King(Colors.BlACK, this.getCells(4, 0))
    }

    addFigures() {
        this.addPawn()
        this.addRook()
        this.addBishop()
        this.addKnight()
        this.addQueen()
        this.addKing()
    }
}

export default Board