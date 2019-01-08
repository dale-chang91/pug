import React, { Component } from 'react';
import Modal from 'react-modal';

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class CurriculumVitaeForm extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openModal() {
    this.setState({
      modalIsOpen: true,
    });
  }

  afterOpenModal() {
    // references are sync'd
    console.log('modal opened');
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
    });
    console.log('modal closed');
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Submitted Data');
  }

  render() {
    return (
      <div className='cv-form'>
        <button onClick={this.openModal}>Add Work Experience</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={modalStyle}
          contentLabel='CV Modal'
        >
          <h3>Add Work History</h3>
          <form>
            <fieldset>
              <legend>Employer Description</legend>
              Company Name: <input type='text'></input>
              Company Location: <input type='text'></input>
              Date Started: <input type=''></input>
              Date Ended: <input type=''></input>
            </fieldset>
            <fieldset>
              <legend>Contributions</legend>

            </fieldset>
            <input type='submit' value='Submit' onClick={this.handleSubmit} />
          </form>
        </Modal>
      </div>
    );
  }
}

export default CurriculumVitaeForm;
