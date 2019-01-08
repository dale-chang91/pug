import React, { Component } from 'react';
import './NavbarItem.css';

class NavbarItem extends Component {
  render() {
    return (
      <div className='navbar-item' >
        <img src={this.props.imageSource} alt='Default' />
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default NavbarItem;
