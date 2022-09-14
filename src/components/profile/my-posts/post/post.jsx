import React from 'react';
import classes from './post.module.css';

const Post = (props) => {
    return (
        <div className={classes['post']}>
            <h5 className={classes['post-title']}>Post title</h5>
            <div className={classes['post-container']}>
                <div className={classes['post-author']}>
                    <div className={classes['post-author-ava']}></div>
                    <p className={classes['post-author-name']}>Author name</p>
                    <p className={classes['post-author-rating']}>Author rating</p>
                </div>
                <div className={classes['post-content']}>
                    <p className={classes['post-message']}>{props.message}</p>
                    <p className={classes['post-likes']}>Like: {props.likesCount}</p>
                    <p className={classes['post-date']}>22-04-2020</p>
                </div>
            </div>
        </div>
    )
}

export default Post;