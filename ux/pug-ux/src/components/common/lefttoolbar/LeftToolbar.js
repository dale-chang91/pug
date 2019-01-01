import React, { Component } from 'react';
import './LeftToolbar.css';
import LeftToolbarItem from './LeftToolbarItem';

import { NavLink } from 'react-router-dom';

class LeftToolbar extends Component {
  render() {
    return (
      <div className='left-toolbar'>
        <NavLink exact to='/'>Home</NavLink>
        <NavLink to='/curriculum-vitae'>
          <LeftToolbarItem name='Curriculum Vitae' imageSource=''/>
        </NavLink>
        <NavLink to='/job-descriptions'>
          <LeftToolbarItem name='Job Descriptions' imageSource=''/>
        </NavLink>
      </div>
    );
  }
}

export default LeftToolbar;
