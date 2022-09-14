import React from 'react';
import classes from './profile.module.css';
import ProfileInfo from './profile-info/profile-info';
import MyPosts from './my-posts/my-posts';

const Profile = (props) => {

    return (
        <div className={classes['profile']}>
            <h5 className={classes['profile-title']}>Profile</h5>
            <ProfileInfo />
            <MyPosts
                postsData={props.profilePage.postsData}
                newPostText={props.profilePage.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile;