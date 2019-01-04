import React, { Component } from 'react';
import './CurriculumMenu.css';

import SimpleWorkExperience from '../work-experience/simple/SimpleWorkExperience';
import CurriculumVitaeForm from '../work-experience/form/CurriculumVitaeForm';

class CurriculumMenu extends Component {
  render() {
    return (
      <div className='curriculum-menu'>
        <SimpleWorkExperience
          jobTitle='Text Analytics and Software Analyst'
          employer='Leidos'
          startDate='February 2016'
          endDate='March 2018'
        />
        <SimpleWorkExperience
          jobTitle='Data Integration Engineer'
          employer='Leidos'
          startDate='April 2018'
          endDate='Present'
        />
        <CurriculumVitaeForm />
      </div>
    );
  }
}

export default CurriculumMenu;
