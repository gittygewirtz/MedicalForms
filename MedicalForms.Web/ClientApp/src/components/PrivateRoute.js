import React from 'react';
import { UserContext } from './UserContext';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <UserContext.Consumer>
        {value => {
            const { user } = value;
            return <Route {...rest} render={(props) => (
                !!user ? <Component {...props} /> : <Redirect to='/login' />
            )} />
        }}
    </UserContext.Consumer>
)

export default PrivateRoute;