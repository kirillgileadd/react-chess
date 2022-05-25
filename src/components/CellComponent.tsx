import React, {FC} from 'react';
import Cell from "../models/Cell";

interface CellComponentProps  {
    cell: Cell
}

const CellComponent:FC<CellComponentProps> = ({cell}) => {
    return (
        <div className={['cell', cell.color].join(' ')}>
            {cell?.figure?.logo && <img className='figure' src={cell.figure.logo}/>}
        </div>
    );
};

export default CellComponent;