import React, { Component } from 'react';
import './SimpleJobDescription.css';

class SimpleJobDescription extends Component {
  render() {
    return (
      <div className='simple-job-description'>
        <h4>{this.props.title}</h4>
        <p>{this.props.company}</p>
        <p>{this.props.location}</p>
      </div>
    );
  }
}

export default SimpleJobDescription;
