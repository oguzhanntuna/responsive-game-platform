import React from 'react';

import classes from './FilterItem.module.css';

const filterItem = (props) => {
    return (
        <div className={classes.FiltersItem}> 
            <input type="checkbox"></input>
            <li>{props.children}</li>
        </div>
    );
}

export default filterItem;