import React from 'react';
import { useDrag } from 'react-dnd';
import { NavLink } from 'react-router-dom';
import styles from './DraggableDeal.module.css';

function DraggableDeal({ deal }) {
    const { _id, dealName, dealOwner, amount, closingDate } = deal;
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'div',
        item: { _id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }))
    return (
        <div
            ref={drag}
            style={{ border: isDragging ? '2px solid darkcyan' : '' }}
            className={styles.draggableDeal}>
            <h3><NavLink to={''}>{dealName}</NavLink></h3>
            <p>{dealOwner}</p>
            <p>${amount}</p>
            <p>Closing Date: {closingDate}</p>
        </div>
    )
}

export default DraggableDeal