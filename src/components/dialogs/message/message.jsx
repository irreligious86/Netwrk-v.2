import React from 'react';
import classes from './message.module.css';

const Message = (props) => {
    return (
        <div className={classes['message']}>
            <span
              className={classes['message-id']}
            >{props.id}</span>
            <span
              className={classes['message-body']}
            >{props.message}</span>
        </div>
    )
}

export default Message;