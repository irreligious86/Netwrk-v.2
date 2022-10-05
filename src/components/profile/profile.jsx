import React from 'react';
import classes from './profile.module.css';
import ProfileInfo from './profile-info/profile-info';
import MyPostsContainer from "./my-posts/my-posts-container";

const Profile = (props) => {

    return (
        <div className={classes['profile']}>
            <h5 className={classes['profile-title']}>Profile</h5>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;