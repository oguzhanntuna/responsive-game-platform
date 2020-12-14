import React, { Component } from 'react';

import classes from './Layout.module.css';
import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    render () {
        return (
            <Aux>
                <Toolbar />
                <main className={classes.Main}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;