import React, { Component } from 'react';
import UploadFile from '../components/UploadFile';
import CamperList from './CamperList';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            <CamperList />
      </div>
    );
  }
}
