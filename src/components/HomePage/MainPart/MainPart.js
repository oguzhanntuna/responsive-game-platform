import React from 'react';

import classes from './MainPart.module.css';
import MyGames from './MyGames/MyGames';
import Listings from './Listings/Listings';

const mainPart = (props) => {
    return (
        <main className={classes.MainPart}>
            <MyGames />
            <Listings />
        </main>
            

    );
}

export default mainPart;