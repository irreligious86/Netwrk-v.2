import React from 'react';
import classes from './my-posts.module.css';
import Post from './post/post';

const MyPosts = (props) => {

    const newPostElement = React.createRef();

    const postsElements = props.postsData
        .map(post => <Post message={post.message} likesCount={post.likesCount}/>);

    const addPost = () => {
        const text = newPostElement.current.value;
        props.addPost(text);
    }

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className="my-posts">
            <h5 className={classes['my-posts-title']}>My posts</h5>
            <div className={classes["input-new-post"]}>
        <textarea
            className={classes['input-textarea']}
            name=""
            id=""
            cols="60"
            rows="3"
            ref={newPostElement}
            placeholder={props.newPostText}
            // value={props.newPostText}
            onChange={onPostChange}
        />
                <div className={classes["input-controls"]}>
                    <button
                        className={classes["input-controls-btn"]}
                        type='button'
                        onClick={() => addPost()}
                    >Add post</button>
                    <button
                        className={classes["input-controls-btn"]}
                        type='button'
                        onClick={() => newPostElement.current.value = ''}
                    >Clean</button>
                </div>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts;