import React from 'react';
import classes from './news.module.css';

const News = (props) => {
    return (
        <div className={classes['news']}>
            <h5 className={classes['news-title']}>News</h5>
        </div>
    )
}

export default News;