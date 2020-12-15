import React from 'react';

import classes from './DrawerToggle.module.css';

const drawerToggle = (props) => {
    return (
        <div className={classes.DrawerToggle}>
            <ion-icon name="grid-outline"></ion-icon>
        </div>
    );
}

export default drawerToggle;