import React from 'react';

import classes from './ListingsItems.module.css';
import ListingItem from './ListingsItem/ListingItem';

const myGamesItems = (props) => {

    return (
        <div>
            <div className={classes.ListingItemsBox}>
            <ListingItem />
            <ListingItem />
            <ListingItem />
            <ListingItem />
            <ListingItem />
            <ListingItem />
            <ListingItem />
            <ListingItem />
            <ListingItem />
            <ListingItem />
            <ListingItem />
            <ListingItem />
            <ListingItem />
            <ListingItem />
            <ListingItem />
            <ListingItem />
            <ListingItem />
            <ListingItem />
            </div>
        </div>
    );
}

export default myGamesItems;