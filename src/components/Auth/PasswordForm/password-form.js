import React, { Component } from 'react';

class PasswordForm extends Component {
    render() {
        return (
            <div className="auth">
                <div className="container">
                    <div className='auth-mail'>
                        <form>
                            <input type="text" className='input' placeholder='Пароль'/>
                            <div className='btn-wrap'>
                                <a href="/login" className='link-btn'>К авторизации</a>
                                <button className='btn'>Войти</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default PasswordForm;
