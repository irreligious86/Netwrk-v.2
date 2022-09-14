import React from 'react';
import classes from './dialog-item.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    const path = '/dialogs/' + props.id;

    return (
        <div className={classes['dialog-item'+' '+'active']}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;