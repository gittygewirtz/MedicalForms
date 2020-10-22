import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { UserContext } from './UserContext';
import axios from 'axios';

class AddCamper extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        dob: ''
    }

    onComponentDidMount = () => {
        this.setState({ dob: new Date() });
    }

    onDateChange = date => {
        this.setState({ dob: date });
    }

    onFirstNameTextChange = e => {
        this.setState({ firstName: e.target.value })
    }

    onLastNameTextChange = e => {
        this.setState({ lastName: e.target.value })
    }

    onAddClick = async e => {
        const { firstName, lastName, dob } = this.state;
        await axios.post('/api/medforms/addcamper', { firstName, lastName, dob });
        this.setState({ firstName: '', lastName: '', dob: '' });
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="row" style={{ marginTop: 40 }}>
                <div className="col-md-6 col-md-offset-3 well">
                    <h3>Enter camper information:</h3>
                    <input type="text" className="form-control" placeholder="First Name" defaultValue={this.state.firstName} onChange={this.onFirstNameTextChange} />
                    <br />
                    <input type="text" className="form-control" placeholder="Last Name" defaultValue={this.state.lastName} onChange={this.onLastNameTextChange} />
                    <br />
                    <DatePicker
                        placeholderText="Date of birth"
                        onChange={this.onDateChange}
                        selected={this.state.dob}
                        className="form-control"
                        defaultValue={this.state.dob} />
                    <br />
                    <br />
                    <button onClick={this.onAddClick} className="btn btn-block btn-success">Submit</button>
                </div>
            </div>
        );
    }

}

export default AddCamper;

//render() {
//    return (
//        <UserContext.Consumer>
//            {value => {
//                return (
//                    <div className="row" style={{ marginTop: '75px' }} >
//                        <div className="col-md-8 col-md-offset-5 well">
//                            <h5 >Enter Camper Information:</h5>
//                            <form>
//                                <br />
//                                <input type="text" name="first-name" placeholder="First Name" className="form-control col-md-3" style={{ display: 'inline-block' }} />
//                                <input type="text" name="last-name" placeholder="Last Name" className="form-control col-md-3" style={{ display: 'inline-block' }} />
//                                <br />
//                                <DatePicker
//                                    placeholderText="Date of Birth"
//                                    style={{ display: 'inline-block' }}
//                                    className="form-control" />
//                                <br />
//                                <br />
//                                <button className="btn btn-primary btn-block">Add Camper</button>
//                                <br />
//                            </form>
//                        </div>
//                    </div>
//                )
//            }}
//        </UserContext.Consumer>
//    );
//}