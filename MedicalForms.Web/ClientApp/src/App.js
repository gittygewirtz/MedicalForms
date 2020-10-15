import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { UserContextComponent } from './components/UserContext';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <UserContextComponent>
            <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/logout' component={Logout} />
            </Layout>
        </UserContextComponent>
    );
  }
}

