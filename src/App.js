import React from 'react';
import logo from './logo.svg';
import Toolbar from './components/Toolbar/Toolbar';
function App() {
  return (
    <div className="App">
     <Toolbar/>
     <main style={{marginTop: '64px'}}>
     <p>This is page content</p>
     </main>
    </div>
  );
}

export default App;

// toolbar is fixed and does not work with paragraphs
// paras do not respect toolbar
// 