import React from 'react';
import classes from './header.module.css';

const StyledLabel = () => {

    return (
        <p className={classes['styled-text']}>
            <h1 className={classes['styled-label']}>
                Netwrk v-2.0.1
            </h1>
            Best social network by @irreligious86
        </p>
    )
}

const Header = (props) => {
    return (
        <header className={classes['header']}>
            <StyledLabel />
        </header>
    )
}

export default Header;