import React, { Component } from 'react';

class PasswordForm extends Component {
    render() {
        return (
            <form>
                <input type="text" className='input'/>
                <div className='btn-wrap'>
                    <a href="/" className='link-btn'>К авторизации</a>
                    <button className='btn'>Далее</button>
                </div>
            </form>
        );
    }
}

export default PasswordForm;
