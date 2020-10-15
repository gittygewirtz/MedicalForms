import React from 'react';

class UploadFile extends React.Component {

    render() {
        return (
            <div>
                <input type="file" id="myFile" name="filename" />
                <button>Upload</button>
            </div>
        );
    }
}

export default UploadFile;