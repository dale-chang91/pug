import React, { Component } from 'react';
import './Navbar.css';
import NavbarItem from './item/NavbarItem';

import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <NavLink exact to='/'>
          <NavbarItem name='Home' imageSource=''/>
        </NavLink>
        <NavLink to='/curriculum-vitae'>
          <NavbarItem name='Curriculum Vitae' imageSource=''/>
        </NavLink>
        <NavLink to='/job-descriptions'>
          <NavbarItem name='Job Descriptions' imageSource=''/>
        </NavLink>
      </div>
    );
  }
}

export default Navbar;
