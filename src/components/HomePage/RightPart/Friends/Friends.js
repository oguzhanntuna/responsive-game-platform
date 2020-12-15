import React from 'react';

import classes from './Friends.module.css';

const friends = (props) => {
    return (
            <aside className={classes.Friends}>
                <div className={classes.FriendsBox}>
                <h2>Friends</h2>
                </div>
            </aside>    
    );
}

export default friends;