const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND_MESSAGE";
export const sendMessageBodyCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            const newMsg = {
                id: 100,
                message: state.newMessageBody,
            };
            state.messagesData.push(newMsg);
            state.newMessageBody = '';
            return state;
        default:
            return state;
    }
}

export default dialogsReducer;