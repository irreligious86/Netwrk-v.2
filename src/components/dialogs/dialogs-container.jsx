import React from 'react';
import Message from './message/message';
import {sendMessageBodyCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs";

const DialogsContainer = (props) => {
    const state = props.store.getState().dialogsPage;

    const onNewMessageChange = (body) => {
        props.dispatch(updateNewMessageBodyCreator(body));
    }

    const onSendMessageClick = () => {
        props.dispatch(sendMessageBodyCreator());
    }

    return <Dialogs
        updateNewMessageBody={onNewMessageChange}
        sendMessage={onSendMessageClick}
        dialogsPage={state}
    />
}

export default DialogsContainer;