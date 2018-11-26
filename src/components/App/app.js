import React, { Component } from 'react';
import Auth from '../Auth';
import './app.css';
import 'normalize.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Auth/>
      </div>
    );
  }
}

export default App;
