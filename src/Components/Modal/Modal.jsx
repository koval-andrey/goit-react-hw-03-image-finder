
import styles from './Modal.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

class Modal extends Component {
    static propTypes = {
        onClose: PropTypes.func.isRequired,
      };

      componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
      };
      componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);  
      };

      handleKeyDown = event => {
          if(event.code === 'Escape') {this.props.onClose()}};

        handleBackdropClick = event => {
            if(event.currentTarget === event.target) {this.props.onClose()}};
      
    render() {
        return (
            <div className={styles.overlay} onClick={this.handleBackdropClick}>
        <div className={styles.modal}>{this.props.children}</div>
      </div>
        );
    }
}


export default Modal;