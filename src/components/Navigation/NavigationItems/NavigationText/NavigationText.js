import React from 'react';

import classes from './NavigationText.module.css';

const navigationText = (props) => {
    return (
        <li className={classes.NavigationText}>
            {props.children}
        </li>
    );
}

export default navigationText;