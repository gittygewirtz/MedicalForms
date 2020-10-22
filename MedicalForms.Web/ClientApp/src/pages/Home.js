import React, { Component } from 'react';
import UploadFile from '../components/UploadFile';
import CamperList from './CamperList';
import AddCamper from '../components/AddCamper';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            <AddCamper />
      </div>
    );
  }
}
