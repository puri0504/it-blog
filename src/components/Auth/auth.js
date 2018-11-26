import React, { Component } from 'react';
import './auth.scss';

class App extends Component {
  render() {
    return (
      <div className="auth">
        <h2>Авторизуйтесь через соцсети</h2>
        <div className='auth-social-btn'></div>
      </div>
    );
  }
}

export default App;
