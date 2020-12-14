import React from 'react';

import classes from './Friends.module.css';

const friends = (props) => {
    return (
            <div className={classes.Friends}>
                <div className={classes.FriendsBox}>
                <h2>Friends</h2>
                </div>
            </div>    
    );
}

export default friends;