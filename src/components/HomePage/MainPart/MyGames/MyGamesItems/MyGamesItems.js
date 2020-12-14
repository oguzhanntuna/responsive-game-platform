import React from 'react';

import classes from './MyGamesItems.module.css';
import MyGamesItem from './MyGamesItem/MyGamesItem';

const myGamesItems = (props) => {
    return (
        <div className={classes.MyGamesItemsBox}>
            <MyGamesItem />
            <MyGamesItem />
            <MyGamesItem />
            <MyGamesItem />
        </div>
    );
}

export default myGamesItems;