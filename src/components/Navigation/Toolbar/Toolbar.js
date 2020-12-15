import React from 'react';

import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../DrawerToggle/DrawerToggle';

const toolbar = (props) => {
    return (
            <nav className={classes.Toolbar}>
                <DrawerToggle />
                <NavigationItems />
            </nav>
    );
}

export default toolbar;