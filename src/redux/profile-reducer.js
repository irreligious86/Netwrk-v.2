const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {
// debugger;
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 412485,
                message: state.newPostText,
                likesCount: 0,
            }
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export default profileReducer;