import React from 'react';

import classes from './FiltersItem.module.css';

const filterItem = (props) => {
    return (
        <li className={classes.FiltersItem}> 
            <span className={classes.CheckBox}></span>
            <p>{props.children}</p>
        </li>
    );
}

export default filterItem;