import React, { Component } from 'react';
import 'normalize.css';
import { Redirect, Route, Switch } from 'react-router';
import {BrowserRouter,} from 'react-router-dom';
import AuthForm from '../Auth/AuthForm';
import PasswordForm from '../Auth/PasswordForm';
import history from '../../router/history'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter history={history}>
          <Switch>
            <Route exact path="/login" component={AuthForm} />
            <Route exact path="/login/password" component={PasswordForm} />

            <Redirect from="/" to="login"/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
