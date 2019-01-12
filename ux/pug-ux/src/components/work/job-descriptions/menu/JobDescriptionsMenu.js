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
        <SimpleJobDescription title='Backend Developer' company='Leidos' location='Reston, VA' />
        <SimpleJobDescription title='iOS Developer' company='Apple' location='Mountain View, CA' />
        <SimpleJobDescription title='Software Engineer II' company='Google' location='Bellvue, WA' />
      </div>
    );
  }
}

export default JobDescriptionsMenu;
