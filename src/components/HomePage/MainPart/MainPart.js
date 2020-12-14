import React from 'react';

import classes from './MainPart.module.css';
import MyGames from './MyGames/MyGames';
import Listings from './Listings/Listings';

const mainPart = (props) => {
    return (
        <div className={classes.MainPart}>
            <MyGames />
            <Listings />
        </div>
            

    );
}

export default mainPart;