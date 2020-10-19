import React from 'react';
import { UserContext } from './UserContext';

class UploadFile extends React.Component {

    render() {
        return (
            <UserContext.Consumer>
                {value => {
                    return (
                        <div className="row" style={{ marginTop: '75px' }} >
                            <div className="col-md-8 col-md-offset-5 well">
                                <h3 >Upload your documents:</h3>
                                <hr/>
                                <form>
                                    <span style={{ fontWeight: 'bold'}}>Medical Form:    </span>
                                    <input type="file" id="myFile" name="filename" />
                                    <button className="btn btn-primary">Upload Medical Form</button>
                                </form>
                                <hr />
                                <form>
                                    <span style={{ fontWeight: 'bold' }}>Immunization Record:   </span>
                                    <input type="file" id="myFile" name="filename" />
                                    <button className="btn btn-primary">Upload Immunization Record</button>
                                </form>
                                <hr />
                                <form>
                                    <span style={{ fontWeight: 'bold' }}>Insurance Card:    </span>
                                    <input type="file" id="myFile" name="filename" />
                                    <button className="btn btn-primary">Upload Insurance Card</button>
                                </form>
                                <hr />
                            </div>
                        </div>
                    )
                }}
            </UserContext.Consumer>
        );
    }
}

export default UploadFile;