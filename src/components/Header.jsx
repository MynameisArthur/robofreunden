import React, { Component } from 'react';

import './Header.sass';

class Header extends Component {
    // shouldComponentUpdate(nextProps,nextState)
    // {
    //     return false;
    // }
    render() {
        console.log('Header');        
        return (
            <div className="header">
                <h1 className="f1">RoboFreunden</h1>                
            </div>
        );
    }
}

export default Header;
