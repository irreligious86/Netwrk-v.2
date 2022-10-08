import React from 'react';
import MyPosts from "./my-posts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import StoreContext from "../../../store-context";

const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState();
            const addPost = () => {
                store.dispatch(addPostActionCreator());
            }

            const onPostChange = (text) => {
                store.dispatch(updateNewPostTextActionCreator(text));
            }
            return <MyPosts
                updateNewPostText={onPostChange}
                addPost={addPost}
                posts={store.getState().profilePage.postsData}
                newPostText={state.profilePage.newPostText}
            />
        }}
    </StoreContext.Consumer>
}

export default MyPostsContainer;