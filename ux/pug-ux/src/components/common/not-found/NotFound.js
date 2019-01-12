import React, { Component } from 'react';
import './NotFound.css';

class NotFound extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }
  render() {
    return (
      <div className='not-found'>
        <h1>Page Not Found</h1>
        <p>Could not find the content you are looking for.</p>
      </div>
    );
  }
}

export default NotFound;
