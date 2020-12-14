import React from 'react';

import classes from './NavigationIcon.module.css';

const navigationIcon = (props) => {
    return (
        <li className={classes.NavigationIcon}>
            {props.children}
        </li>
    );
}

export default navigationIcon;