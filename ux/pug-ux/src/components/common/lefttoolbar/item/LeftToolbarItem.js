import React, { Component } from 'react';

const leftToolbarItemStyle = {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
};

class LeftToolbarItem extends Component {
  render() {
    return (
      <div className='leftToolbarItem' style={leftToolbarItemStyle}>
        <img src={this.props.imageSource} alt='Default' />
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default LeftToolbarItem;
