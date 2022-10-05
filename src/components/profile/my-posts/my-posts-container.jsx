import React from 'react';
import MyPosts from "./my-posts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <MyPosts
        updateNewPostText={onPostChange}
        addPost={addPost}
        posts={state.profilePage.postsData}
        newPostText={state.profilePage.newPostText}
        />
    )
}

export default MyPostsContainer;