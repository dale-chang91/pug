import React, { Component } from 'react';
import './CurriculumContent.css';

class CurriculumContent extends Component {
  render() {
    return (
      <div className='curriculum-content'>
        <div className='article-header'>
          <h1>Curriculum Vitae</h1>
        </div>
        <div className='article'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida
            lacus lacus. Pellentesque ultricies magna vel purus auctor, ut venenatis
            lectus viverra. Nam eu ante turpis. Duis nec accumsan eros. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            Cras aliquam, massa consectetur rutrum efficitur, erat quam mattis sapien,
            ac feugiat magna urna eget nulla. Nunc quis dui ut nisi posuere facilisis
            eu sed sapien. Aliquam vulputate tincidunt felis, at pretium neque varius in.
          </p>
        </div>
      </div>
    );
  }
}

export default CurriculumContent;
