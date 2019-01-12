import React, { Component } from 'react';
import './NavbarWorkSection.css';
import { Link } from 'react-router-dom';

class NavbarWorkSection extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    return (
      <div className='navbar-section'>
        <ul>
          <li>
            <Link to={`${this.props.url}/curriculum-vitae`}>Curriculum Vitae</Link>
          </li>
          <li>
            <Link to={`${this.props.url}/job-description`}>Job Descriptions</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavbarWorkSection;
