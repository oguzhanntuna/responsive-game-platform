import React from 'react';

import classes from './MyGames.module.css'
import MyGamesItems from './MyGamesItems/MyGamesItems';

const myGames = (props) => {
    return (
      <div className={classes.MyGames}>
        <div className={classes.MyGamesTitle}>
          <h2>My Games</h2>
          <h4>Browse Games >></h4>
        </div>
        <div>
          <MyGamesItems />
        </div>
      </div>
    );
}

export default myGames;