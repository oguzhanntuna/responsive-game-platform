import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationText from './NavigationText/NavigationText';
import NavigationIcon from './NavigationIcon/NavigationIcon';

const navigationItems = (props) => {
    return (
        <div className={classes.NavigationItems}>
            <ul className={classes.Texts}>
                <NavigationText>Home</NavigationText>
                <div className={classes.VerticalLine}>|</div>
                <NavigationText>Store</NavigationText>
                <div className={classes.VerticalLine}>|</div>
                <NavigationText>Listings</NavigationText>
                <div className={classes.VerticalLine}>|</div>
                <NavigationText>My Games</NavigationText>
                <div className={classes.VerticalLine}>|</div>
                <NavigationText>Community</NavigationText>
            </ul>
            <ul className={classes.Icons}>
                <NavigationIcon><ion-icon name="settings-outline"></ion-icon></NavigationIcon>
                <NavigationIcon><ion-icon name="notifications-outline"></ion-icon></NavigationIcon>
                <NavigationIcon><ion-icon name="mail-outline"></ion-icon></NavigationIcon>
                <NavigationIcon><ion-icon name="person-outline"></ion-icon></NavigationIcon>
            </ul>  
        </div>
    );
}

export default navigationItems;