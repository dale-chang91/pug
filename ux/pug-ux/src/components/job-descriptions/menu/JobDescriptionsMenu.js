import React, { Component } from 'react';
import './JobDescriptionsMenu.css';

import SimpleJobDescription from '../simple/SimpleJobDescription';

class JobDescriptionsMenu extends Component {
  render() {
    return (
      <div className='job-descriptions-menu'>
        <SimpleJobDescription title='Software Engineer' company='Company LLC' location='Washington DC' />
        <SimpleJobDescription title='Full Stack Developer' company="Two's Company" location='Boulder, CO' />
        <SimpleJobDescription title='Data Engineer' company='Capital One' location='McLean, VA' />
      </div>
    );
  }
}

export default JobDescriptionsMenu;
