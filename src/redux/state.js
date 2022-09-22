const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

const store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1,
                    message: "Why, sir, cobble you. — from Julius Caesar",
                    likesCount: 2},
                {id: 2,
                    message: "Be not afraid of greatness. — from Twelfth Night",
                    likesCount: 0},
                {id: 3,
                    message: "I'll wait upon your honour. — from Measure for Measure",
                    likesCount: 6},
                {id: 4,
                    message: "Ere I let fall the windows of mine eyes — from Richard III" +
                        "Ere I let fall the windows of mine eyes — from Richard III" +
                        "Ere I let fall the windows of mine eyes — from Richard III" +
                        "Ere I let fall the windows of mine eyes — from Richard III" +
                        "Ere I let fall the windows of mine eyes — from Richard III" +
                        "Ere I let fall the windows of mine eyes — from Richard III",
                    likesCount: 4},
                {id: 5,
                    message: "All houses in the suburbs of Vienna must be plucked down. — from Measure for Measure",
                    likesCount: 1},
            ],
            newPostText: 'New post text',
        },
        dialogsPage: {
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
        },
    },
    getState() {return this._state},
    _callSubscriber() {},
    subscribe(observer) {this._callSubscriber = observer},
    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                const newPost = {
                    id: 412485,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0,
                }
                this._state.profilePage.postsData.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
                break;
            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newText;
                break;
            case UPDATE_NEW_MESSAGE_BODY:
                this._state.dialogsPage.newMessageBody = action.body;
                console.log('UPDATE_NEW_MESSAGE_BODY');
                console.log(action.body);
                this._callSubscriber(this._state);
                break;
            case SEND_MESSAGE:
                this._state.dialogsPage.messagesData.push({
                    id: 100, message: "New message",
                });
                console.log(this._state.dialogsPage.messagesData);
                this._state.dialogsPage.newMessageBody = '';
                this._callSubscriber(this._state);
                break;
        }
    },
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const sendMessageBodyCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBody = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text});

export default store;
window.store = store;