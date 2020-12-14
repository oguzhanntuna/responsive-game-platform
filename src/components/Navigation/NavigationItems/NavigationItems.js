import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import NavigationIcon from './NavigationIcon/NavigationIcon';

const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <div className={classes.Texts}>
                <NavigationItem>Home</NavigationItem>
                <div className={classes.VerticalLine}>|</div>
                <NavigationItem>Store</NavigationItem>
                <div className={classes.VerticalLine}>|</div>
                <NavigationItem>Listings</NavigationItem>
                <div className={classes.VerticalLine}>|</div>
                <NavigationItem>My Games</NavigationItem>
                <div className={classes.VerticalLine}>|</div>
                <NavigationItem>Community</NavigationItem>
            </div>
            <div className={classes.Icons}>
                <NavigationIcon><ion-icon name="settings-outline"></ion-icon></NavigationIcon>
                <NavigationIcon><ion-icon name="notifications-outline"></ion-icon></NavigationIcon>
                <NavigationIcon><ion-icon name="mail-outline"></ion-icon></NavigationIcon>
                <NavigationIcon><ion-icon name="person-outline"></ion-icon></NavigationIcon>
            </div>  
        </ul>
    );
}

export default navigationItems;