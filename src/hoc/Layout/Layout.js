import React, { Component } from 'react';

import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    render () {
        return (  
            <div className={classes.PageLayout}>
                <header>
                    <Toolbar />  
                </header> 
                {this.props.children}             
            </div>


                
        );
    }
}

export default Layout;