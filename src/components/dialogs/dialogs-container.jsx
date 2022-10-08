import React from 'react';
import {sendMessageBodyCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs";
import StoreContext from "../../store-context";

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {(store) => {
            const state = store.getState().dialogsPage;

            const onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            }

            const onSendMessageClick = () => {
                store.dispatch(sendMessageBodyCreator());
            }
            return <Dialogs
                updateNewMessageBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogsPage={state}
            />
        }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;