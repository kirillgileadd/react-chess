import Cell from "./Cell";
import {Colors} from "./Colors";

class Board {
    cells: Cell[][] = []

    initCells() {
        for (let i = 0; i < 8; i++) {
            let row: Cell[] = []
            for(let j = 0; j < 8; j++) {
                if((i + j) % 2 !== 0 ) {
                    row.push(new Cell(this, j, i, Colors.BlACK, null))
                } else {
                    row.push(new Cell(this, j, i, Colors.WHITE, null))
                }
            }
            this.cells.push(row)
        }
    }
}

export default Board