import React from 'react';
import CamperListRow from '../components/CamperListRow';

class CamperList extends React.Component {

    render() {
        return (
            <div>
                <table className="table table-striped table-hover table-bordered">
                    <thead>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>DOB</th>
                        <th>Medical Form</th>
                        <th>Immunization Record</th>
                        <th>Insurance Card</th>
                    </thead>
                    <tbody>
                        <CamperListRow/>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CamperList;