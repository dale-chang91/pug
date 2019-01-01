import React, { Component } from 'react';
import './SimpleWorkExperience.css';

class SimpleWorkExperience extends Component {
  render() {
    return (
      <div className='simple-work-experience'>
        <h4>{this.props.jobTitle}</h4>
        <p>{this.props.employer}</p>
        <span>{this.props.startDate}</span>-<span>{this.props.endDate}</span>
      </div>
    );
  }
}

export default SimpleWorkExperience;
