import React, { Component } from 'react';
import './CurriculumVitaePanel.css';

import CurriculumMenu from './menu/CurriculumMenu';
import CurriculumContent from './content/CurriculumContent';

class CurriculumVitaePanel extends Component {
  render() {
    return (
      <div className='curriculum-vitae-panel'>
        <CurriculumMenu />
        <CurriculumContent />
      </div>
    );
  }
}

export default CurriculumVitaePanel;
