import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    }); 
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen:false});
  };


  render() {
  let sideDrawer;
  let backdrop;
  if (this.state.sideDrawerOpen) {
    sideDrawer = <SideDrawer />;
    backdrop = <Backdrop click={this.backdropClickHandler}/>
  }
  return (
    <div className={{height: '100%'}}>
      
     <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
     {sideDrawer}
     {backdrop}
     <main style={{marginTop: '64px'}}>
     <p>This is page content</p>
     </main>
    </div>
  );
}
}

export default App;

// toolbar is fixed and does not work with paragraphs
// paras do not respect toolbar
// 
/* <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
just a reference! Es wird in den Klammern nicht direkt ausgeführt!*/