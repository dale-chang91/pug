import React, { Component } from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/fun">Fun</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
