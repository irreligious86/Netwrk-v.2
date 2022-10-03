const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND_MESSAGE";
export const sendMessageBodyCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

let initialState = {
    messagesData: [
        {id: 1, message: "O you hard hearts, you cruel men of Rome... — from Julius Caesar"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "The game is up. — from Cymbeline"},
        {id: 4, message: "Once more unto the breach, dear friends, once more... — from Henry V"},
        {id: 5, message: "Mortality and mercy in Vienna... — from Measure for Measure"},
        {id: 6, message: "Legitimate Edgar, I must have your land... — from King Lear"},
    ],

    dialogsData: [
        {id: 1, name: "Alex" },
        {id: 2, name: "John" },
        {id: 3, name: "Bill" },
        {id: 4, name: "Victor" },
        {id: 5, name: "Vallery" },
        {id: 6, name: "Ondrei" },
        {id: 7, name: "Andrew" },
        {id: 8, name: "Michael"}
    ],

    newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {
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