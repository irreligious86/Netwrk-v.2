import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './nav.module.css';

const Nav = (props) => {
    return (
        <div className={classes.nav}>
            {/*<ul className={classes['nav-list']}>*/}
            {/*    <li className={classes['nav-list-item']}>*/}
            {/*        <NavLink*/}
            {/*            to="/profile"*/}
            {/*            className = { navData => navData.isActive ? classes['nav-link-active'] : classes['nav-link'] }>*/}
            {/*            Profile*/}
            {/*        </NavLink>*/}
            {/*    </li>*/}
            {/*    <li className={classes['nav-list-item']}>*/}
            {/*        <NavLink*/}
            {/*            to="/dialogs"*/}
            {/*            className = { navData => navData.isActive ? classes['nav-link-active'] : classes['nav-link'] }>*/}
            {/*            Dialogs*/}
            {/*        </NavLink>*/}
            {/*    </li>*/}
            {/*    <li className={classes['nav-list-item']}>*/}
            {/*        <NavLink*/}
            {/*            to="/news"*/}
            {/*            className = { navData => navData.isActive ? classes['nav-link-active'] : classes['nav-link'] }>*/}
            {/*            News*/}
            {/*        </NavLink>*/}
            {/*    </li>*/}
            {/*    <li className={classes['nav-list-item']}>*/}
            {/*        <NavLink*/}
            {/*            to="/music"*/}
            {/*            className = { navData => navData.isActive ? classes['nav-link-active'] : classes['nav-link'] }>*/}
            {/*            Music*/}
            {/*        </NavLink>*/}
            {/*    </li>*/}
            {/*    <li className={classes['nav-list-item']}>*/}
            {/*        <NavLink*/}
            {/*            to="/settings"*/}
            {/*            className = { navData => navData.isActive ? classes['nav-link-active'] : classes['nav-link'] }>*/}
            {/*            Settings*/}
            {/*        </NavLink>*/}
            {/*    </li>*/}
            {/*</ul>*/}
        </div>
    )
}

export default Nav;