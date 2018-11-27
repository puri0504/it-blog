import React, { Component } from 'react';
import history from '../../../router/history'
import googleIcon from './google_icon.jpg'
import fbIcon from './fb_icon.png'
import twitterIcon from './twitter_icon.png'
import '../auth.scss';

const iconsMap = [
    {
      path: googleIcon,
      name: 'google',
    },
    {
      path: fbIcon,
      name: 'fb',
    },
    {
      path: twitterIcon,
      name: 'twitter',
    },
];

class AuthForm extends Component {
  goToPasswordForm = () => {
      history.push('/login/password');
  };

  render() {
    const icons = iconsMap.map(icon => (<img src={icon.path} className='icon' alt={icon.name} key={icon.name}/>));

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
                <button className='btn' onClick={this.goToPasswordForm}>Далее</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthForm;
