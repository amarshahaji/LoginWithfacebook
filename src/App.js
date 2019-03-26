import React, { Component } from 'react';

import './App.css';
import FacebookLoginComponent from './Components/FacebookLogin';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p>Login with Facebook</p>
        <FacebookLoginComponent/>
        </header>
      </div>
    );
  }
}

export default App;
