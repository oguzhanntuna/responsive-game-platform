import React from 'react';

import classes from './MyGamesItems.module.css';
import MyGamesItem from './MyGamesItem/MyGamesItem';

const myGamesItems = (props) => {
    return (
        <ul className={classes.MyGamesItemsBox}>
            <MyGamesItem />
            <MyGamesItem />
            <MyGamesItem />
            <MyGamesItem />
            <MyGamesItem />
            <MyGamesItem />
            <MyGamesItem />
            <MyGamesItem />
            <MyGamesItem />
            <MyGamesItem />
            <MyGamesItem />
            <MyGamesItem />
        </ul>
    );
}

export default myGamesItems;