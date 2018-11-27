import React, { Component } from 'react';
import './auth.scss';
import googleIcon from './google_icon.jpg'
import fbIcon from './fb_icon.png'
import twitterIcon from './twitter_icon.png'

const iconsMap = [googleIcon, fbIcon, twitterIcon];

class App extends Component {
  render() {
    const icons = iconsMap.map(icon => (<img src={icon} className='icon'/>));

    return (
      <div className="auth">
        <div className="container">
          <div className='auth-social'>
            <h2 className='title'>Авторизуйтесь через соцсети</h2>
            <div className='icons'>{icons}</div>
          </div>
          <div className='auth-mail'>
            <h2 className='title'>Войдите с помощью email</h2>
            <form>
              <input type="text" className='input' placeholder='Email'/>
              <a href="/" className='link reset-link'>Забыли email</a>
              <div className='btn-wrap'>
                <a href="/" className='link-btn'>Регистрация</a>
                <button className='btn'>Далее</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
