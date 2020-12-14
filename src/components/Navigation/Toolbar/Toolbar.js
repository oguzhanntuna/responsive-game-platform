import React from 'react';

import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
    return (
        <header>
            <nav className={classes.Toolbar}>
                <NavigationItems />
            </nav>
        </header>
    );
}

export default toolbar;