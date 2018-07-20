import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import PMLogin from './pm//PMLogin.js'
import PMAppShell from './pm//PMAppShell.js'

// Import the Today component to be used below
//import Today from './Today/Today'
// Import the History component to be used below
//import History from './History/History'

class App extends Component {
  render() {    
    return (
      <div>
        <PMAppShell />
      </div>
    );
  }
}

export default App;
