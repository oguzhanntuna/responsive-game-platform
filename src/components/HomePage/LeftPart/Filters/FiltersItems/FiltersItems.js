import React from 'react';

import classes from './FilterItems.module.css';
import FilterItem from './FiltersItem/FiltersItem';

const filtersItems = (props) => {
    return (
        <ul className={classes.FiltersItems}>
            <FilterItem>Gordion Game</FilterItem>
            <FilterItem>Dungeons & Dragons</FilterItem>
            <FilterItem>Warhammer</FilterItem>
            <FilterItem>Call of Cthulu</FilterItem>
            <FilterItem>Shadowrun</FilterItem>
            <FilterItem>Pathfinder</FilterItem>
            <FilterItem>Cyberpunk</FilterItem>
            <FilterItem>Fate Core</FilterItem>
        </ul>
    );
}

export default filtersItems;