import React from 'react';
import classes from './profile-info.module.css';

let profileImgLink = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8II5A8OzCGjpl59GUZ96P8wGhjwAhgqhQ5Q&usqp=CAU";

const ProfileInfo = (props) => {
    return (
        <div className={classes["profile-info"]}>
            <h5 className={classes['profile-info-title']}>Profile Info</h5>
            <img
                className={classes['profile-img']}
                src={profileImgLink}
                alt="profile img" />
            <span className={classes['profile-description']}></span>
        </div>
    )
}

export default ProfileInfo;