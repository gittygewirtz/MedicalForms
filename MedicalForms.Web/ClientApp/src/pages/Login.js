import React from 'react';
import axios from 'axios';
import { produce } from 'immer';
import { UserContext } from '../components/UserContext';
import { Link } from 'react-router-dom';

class Login extends React.Component {

    state = {
        user: {
            email: '',
            password: ''
        },
        isValidLogin: ''
    }

    onTextChange = e => {
        const nextState = produce(this.state, draft => {
            draft.user[e.target.name] = e.target.value;
        });

        this.setState(nextState);
    }

    onFormSubmit = async (e, setUser) => {
        e.preventDefault();
        const { data } = await axios.post('/api/account/login', this.state.user);
        setUser(data);
        const isValidLogin = !!data;
        this.setState({ isValidLogin });
        
        if (isValidLogin) {
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <UserContext.Consumer>
                {value => {
                    return (
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 well">
                                <h3>Log in to your account</h3>
                                <form onSubmit={e => this.onFormSubmit(e, value.setUser)}>
                                    {!!this.state.isValidLogin && <span className="text-danger">Incorrect username or password, please try again.</span>}
                                    <br />
                                    <input onChange={this.onTextChange} type="text" value={this.state.user.email} name="email" placeholder="Email" className="form-control" />
                                    <br />
                                    <input onChange={this.onTextChange} type="password" value={this.state.user.password} name="password" placeholder="Password" className="form-control" />
                                    <br />
                                    <button className="btn btn-primary btn-block">Login</button>
                                    <br />
                                    <span>Don't have an account? Sign up <Link to="/signup">here</Link>.</span>
                                </form>
                            </div>
                        </div>
                    )
                }}
            </UserContext.Consumer>
        );
    }
}

export default Login;