import React from 'react';
import classes from './dialogs.module.css';
import DialogItem from './dialog-item/dialog-item';
import Message from './message/message';
import {sendMessageBodyCreator, updateNewMessageBodyCreator} from "../../redux/state";

const Dialogs = (props) => {
    const state = props.store.getState().dialogsPage;

    const newTextElement = React.createRef();

    const dialogsElements = state.dialogsData
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    const messagesElements = state.messagesData
        .map( msg => <Message message={msg.message} id={msg.id} /> );

    let newMessageBody = state.newMessageBody;

    const onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body));
    }

    const onSendMessageClick = () => {
        props.dispatch(sendMessageBodyCreator());
    }

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
                    <textarea
                        className={classes['input-textarea']}
                        ref={newTextElement}
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder="Type your message:"
                        name=""
                        id=""
                        cols="45"
                        rows="2"
                    ></textarea>
                    <div className={classes["input-controls"]}>
                        <button
                            className={classes["input-controls-btn"]}
                            type='button'
                            onClick={onSendMessageClick}
                        >Add message</button>
                        <button
                            className={classes["input-controls-btn"]}
                            type='button'
                            onClick={() => newTextElement.current.value = ''}
                        >Clean</button>
                    </div>
                    <div className="messages-array">
                        {messagesElements}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;