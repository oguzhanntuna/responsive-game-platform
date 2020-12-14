import React from 'react';

import classes from './Filters.module.css';
import FiltersItems from './FiltersItems/FiltersItems';

const filters = (props) => {
    return (
            <div className={classes.Filters}>
                <div className={classes.FiltersBox}>
                <h2>Filters</h2>
                <FiltersItems />
                <button>More</button>
                </div>
                
            </div>    
    );
}

export default filters;