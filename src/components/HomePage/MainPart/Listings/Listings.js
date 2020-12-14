import React from 'react';

import classes from './Listings.module.css'
import ListingItems from './ListingsItems/ListingsItems';

const listing = (props) => {
    return (
      <div className={classes.Listing}>
        <div className={classes.ListingTitle}>
          <h2>Listings</h2>
          <h4>Browse Listings >></h4>
        </div>
        <div>
          <ListingItems />
        </div>
      </div>
    );
}

export default listing;