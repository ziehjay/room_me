import React from 'react';
// stateless component 
import './DrawerToggleButton.css';

// holds the click method!
const drawerToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button__line"/>
        <div className="toggle-button__line"/>
        <div className="toggle-button__line"/>
    </button>
);


export default drawerToggleButton;

// toggle = umschalten