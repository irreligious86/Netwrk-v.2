import React from 'react';
import classes from './dialogs.module.css';
import DialogItem from './dialog-item/dialog-item';
import Message from './message/message';

const Dialogs = (props) => {

    const dialogsElements = props.dialogsPage.dialogsData
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    const messagesElements = props.dialogsPage.messagesData
        .map( msg => <Message id={msg.id} message={msg.message} /> );

    const addText = (props) => {
        const text = newTextElement.current.value;
        alert(text);
    }

    const newTextElement = React.createRef();

    return (
        <div className={classes['dialogs']}>
            <h5 className={classes['dialogs-title']}>Dialogs</h5>
            <div className={classes['dialogs-inner']}>
                <div className={classes['dialogs-items']}>
                    <h5 className={classes['dialogs-items-title']}>Dialog items</h5>
                    {dialogsElements}
                </div>
                <div className={classes['messages']}>
                    <h5 className={classes['messages-title']}>Messages</h5>
                    {messagesElements}
                    <textarea
                        name=""
                        id=""
                        cols="45"
                        rows="2"
                        ref={newTextElement}
                    ></textarea>
                    <button onClick={ () => addText() }>Add text</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;