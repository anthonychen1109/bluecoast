import React, { Component } from 'react';
import Modal from 'react-modal';

//MODAL STYLES
const customStyles = {
	content: {
		margin: 'auto',
    marginTop: '30px',
		maxHeight: '80%',
		maxWidth: '100%'
	}
}

class GalleryModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    return (
      <div className="gal-modal">
      <img
        src={this.props.image}
        alt={this.props.image}
        onClick={this.openModal}
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          >
            <img className="modal-img"
              src={this.props.image}
              alt={this.props.image}
              style={customStyles}
            />
        </Modal>
      </div>
    )
  }
}

export default GalleryModal;
