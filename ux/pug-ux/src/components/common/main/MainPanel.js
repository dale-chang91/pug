import React, { Component } from 'react';
import './MainPanel.css';

class MainPanel extends Component {
  render() {
    return (
      <div className='main-panel'>
        <div className='spacer'></div>
        <div className='main-content'>
          <div className='content'>
            <h1>PUG Main Panel</h1>
            <p>PUG is a platform for job seekers and recruiters which puts the user's
            whole job experience forward. The goal is to create the perfect resume for
            a given job description, and seeks to take out a lot of the redundancies
            in the hiring environment</p>
          </div>
          <div className='content'>
            <h2>Direction</h2>
            <p>At this point, I'm thinking that this application will eventually
            turn into a personal blog and playground for various NLP, text analytics,
            and React/NodeJS </p>
          </div>
          <div className='content'>
            <h2>Work Section</h2>
            <p>The next step is to fix the Navbar and combine the Work Experience
            /CV section with the Job Description section to create an overall "Work"
             section. Afterward, the python NLP analytics will be developed so we
             can see what similarities exist between my work history and the job
             descriptions that I am looking at.</p>
          </div>
        </div>
        <div className='spacer'></div>
      </div>
    );
  }
}

export default MainPanel;
