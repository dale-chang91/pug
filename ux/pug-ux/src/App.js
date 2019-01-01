import React, { Component } from 'react';
import './App.css';

import { Route, HashRouter } from 'react-router-dom';
import LeftToolbar from './components/common/lefttoolbar/LeftToolbar';

import MainPanel from './components/common/main/MainPanel';
import CurriculumVitaePanel from './components/curriculum-vitae/CurriculumVitaePanel';
import JobDescriptionsPanel from './components/job-descriptions/JobDescriptionsPanel';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <LeftToolbar />
          <div className="content">
            <Route exact path="/" component={MainPanel} />
            <Route path="/curriculum-vitae" component={CurriculumVitaePanel} />
            <Route path="/job-descriptions" component={JobDescriptionsPanel} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
