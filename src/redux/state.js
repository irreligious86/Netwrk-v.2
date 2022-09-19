
let rerenderEntireTree = () => {};

const state = {
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
    },
};

window.state = state;

export const addPost = () => {
     const newPost = {
        id: 412485,
        message: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = newText => {
    state.profilePage.newPostText = newText;
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;
