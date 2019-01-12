import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import WorkHomePanel from './WorkHomePanel';
import CurriculumVitaePanel from './curriculum-vitae/CurriculumVitaePanel';
import JobDescriptionsPanel from './job-descriptions/JobDescriptionsPanel';

class WorkContainer extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    return (
      <div className='work-container'>
        <Route exact path='/' component={WorkHomePanel} />
        <Route path="/work" component={CurriculumVitaePanel} />
        <Route path="/fun" component={JobDescriptionsPanel} />
      </div>
    );
  }
}

export default WorkContainer;
