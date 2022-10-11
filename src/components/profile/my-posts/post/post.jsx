import React from 'react';
import classes from './post.module.css';

const Post = (props) => {
    return (
        <div className={classes['post']}>
            <div className={classes['post-container']}>
                <div className={classes['post-author-ava']}></div>
                <div className={classes['post-author-info']}>
                    <p className={classes['post-author-name']}>Author name</p>
                    <p className={classes['post-author-rating']}>Author rating</p>
                </div>
                <h5 className={classes['post-title']}>Post title</h5>
                <p className={classes['post-message']}>{props.message}</p>
                <div className={classes['post-controls']}>
                    <button className={classes['post-controls-btn']}
                            type='button'>Button 1
                    </button>
                    <button className={classes['post-controls-btn']}
                            type='button'>Button 2
                    </button>
                </div>
                <span className={classes['post-likes']}>Like: {props.likesCount}</span>
                <span className={classes['post-date']}>22-04-2020</span>
            </div>
        </div>
    )
}

export default Post;