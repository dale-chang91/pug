import React, { Component } from 'react';

const splashStyle = {
  backgroundImage:  'url(../../public/pictures)',
};

class Splash extends Component {
  render() {
    return (
      <div
        className='splash'
        style={splashStyle}
      >

      </div>
    );
  }
}

export default Splash;
