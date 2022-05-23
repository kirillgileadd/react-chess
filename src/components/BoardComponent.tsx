import React, {FC} from 'react';
import Board from "../models/Board";
import CellComponent from "./CellComponent";

interface BoardComponentProps {
    board: Board
    setBoard: (board: Board) => void
}

const BoardComponent:FC<BoardComponentProps> = ({board, setBoard}) => {
    return (
        <div className='board'>
            {board.cells.map((board, index) =>
                <React.Fragment key={index}>
                    {board.map(cell =>
                        <CellComponent key={cell.id} cell={cell}/>
                    )}
                </React.Fragment>
            )}
        </div>
    );
};

export default BoardComponent;