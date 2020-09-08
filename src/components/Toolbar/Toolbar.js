// allows us to write jsx code:
import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
// this will handle css code:
import './Toolbar.css';
// >
// li = link, ul = unorderedlist
// returns Statement Header:
// functional component, where I get props and return some jsx (currly braces)
// return some value 
const toolbar = props => (

    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar__logo"><a href="/">THE LOGO</a></div>
            <div className="spacer"/>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Home</a></li> 
                    <li><a href="/">Meine WG</a></li>
                    <li><a href="/">ToDo</a></li>
                    <li><a href="/">Einkaufen</a></li>
                    <li><a href="/">Putzen</a></li>
                    <li><a href="/">Settings</a></li>
                </ul>
            </div>
         
        </nav>
    </header>
);

export default toolbar;