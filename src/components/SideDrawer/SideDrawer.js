import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => (
    <nav className="side-drawer">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Meine WG</a></li>
            <li><a href="/">ToDo</a></li>
            <li><a href="/">Einkaufen</a></li>
            <li><a href="/">Putzen</a></li>
            <li><a href="/">Settings</a></li>
        </ul>
    </nav>
);

export default sideDrawer; 