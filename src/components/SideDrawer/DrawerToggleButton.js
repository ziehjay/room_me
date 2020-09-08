import React from 'react';
// stateless component 
import './DrawerToggleButton.css';

// holds the click method!
const drawerToggleButton = props => (
    // onClick oder onMouseOver 
    <button className="toggle-button" onMouseOver={props.click}>
        <div className="toggle-button__line"/>
        <div className="toggle-button__line"/>
        <div className="toggle-button__line"/>
    </button>
);


export default drawerToggleButton;

// toggle = umschalten