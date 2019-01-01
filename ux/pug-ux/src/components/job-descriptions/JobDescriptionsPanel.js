import React, { Component } from 'react';
import './JobDescriptionsPanel.css';

import JobDescriptionsMenu from './menu/JobDescriptionsMenu';
import DetailedJobDescription from './detailed/DetailedJobDescription';

class JobDescriptionsPanel extends Component {
  render() {
    return (
      <div className='job-descriptions-panel'>
        <JobDescriptionsMenu />
        <DetailedJobDescription />
      </div>
    );
  }
}

export default JobDescriptionsPanel;
