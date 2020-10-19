import React from 'react';
import { UserContext } from './UserContext';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Logout extends React.Component {

    componentDidMount = async () => {
        await axios.get('/api/account/logout');
    }

    render() {
        return (
            <UserContext.Consumer>
                {value => {
                    value.logout()
                    return <Redirect to='/' />
                }}
            </UserContext.Consumer>
        );
    }

}

export default Logout;