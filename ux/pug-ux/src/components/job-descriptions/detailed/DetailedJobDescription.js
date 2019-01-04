import React, { Component } from 'react';
import './DetailedJobDescription.css';

class DetailedJobDescription extends Component {
  render() {
    return (
      <div className='detailed-job-description'>
        <div className='article-header'>
          <h3>Detailed Job Description</h3>
        </div>
        <div className='article'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            convallis ligula at orci mattis maximus. Mauris non eleifend leo.
            Duis venenatis maximus justo, in porta erat eleifend quis. Aliquam
            lacinia vulputate laoreet. Maecenas quis nunc eget enim vehicula
            imperdiet. Cras risus magna, laoreet vel imperdiet in, pellentesque
            vitae lacus. Vivamus ullamcorper dolor at placerat accumsan.
            Pellentesque at volutpat ex. Nunc at arcu a nibh hendrerit egestas.
            Praesent posuere interdum arcu, et tincidunt lacus rutrum a. Donec
            aliquet tincidunt porta. Cras libero ipsum, sodales eget porttitor
            varius, viverra in nunc. Donec eget risus nec lacus mollis ultrices
            ac ac neque. Integer rutrum nulla non metus dictum pellentesque.
          </p>
        </div>
      </div>
    );
  }
}

export default DetailedJobDescription;
