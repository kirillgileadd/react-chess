import React, {FC, useEffect, useState} from 'react';
import Board from "../models/Board";
import CellComponent from "./CellComponent";
import Cell from "../models/Cell";

interface BoardComponentProps {
    board: Board
    setBoard: (board: Board) => void
}

const BoardComponent: FC<BoardComponentProps> = ({board, setBoard}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    useEffect(() => {
        highlightCells()
    }, [selectedCell])

    const onChangeCell = (cell: Cell) => {
        if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell)
            setSelectedCell(null)
        } else {
            if(cell.figure) {
                setSelectedCell(cell)
            }
        }
    }

    const highlightCells = () => {
        board.highlightCells(selectedCell)
        updateBoard()
    }

    const updateBoard = () => {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    return (
        <div className='board'>
            {board.cells.map((board, index) =>
                <React.Fragment key={index}>
                    {board.map(cell =>
                        <CellComponent
                            onChange={onChangeCell}
                            selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                            key={cell.id}
                            cell={cell}
                        />
                    )}
                </React.Fragment>
            )}
        </div>
    );
};

export default BoardComponent;