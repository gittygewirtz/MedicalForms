import React, { Component } from 'react';
import UploadFile from '../components/UploadFile';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            <UploadFile />
      </div>
    );
  }
}
