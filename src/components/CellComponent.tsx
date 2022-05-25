import React, {FC} from 'react';
import Cell from "../models/Cell";

interface CellComponentProps {
    cell: Cell
    selected: boolean;
    onChange: (cell: Cell) => void
}

const CellComponent: FC<CellComponentProps> = ({cell, selected, onChange}) => {
    return (
        <div
            onClick={() => onChange(cell)}
            className={['cell',
                cell.color,
                selected ? 'selected' : '']
                .join(' ')}
        >
            {cell.available && cell.figure && !selected && <div className={'attack'}/>}
            {cell.available && !cell.figure && <div className={'available'}/>}
            {cell?.figure?.logo && <img className='figure' src={cell.figure.logo} alt={'figure'}/>}
        </div>
    );
};

export default CellComponent;