import React from 'react';

import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
    return (
            <nav className={classes.Toolbar}>
                <NavigationItems />
            </nav>
    );
}

export default toolbar;