import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ImgGallery.module.css';
import Button from '../Button';
import Modal from '../Modal';
import ImgGalleryItems from '../ImgGalleryItems';
import Loader from '../Loader';
import SearchError from '../SearchError';
import Api from '../api';

class ImgGallery extends Component {
  static propTypes = {
    searchQuery: PropTypes.string,
  };
  state = {
    images: [],
    page: 1,
    error: null,
    showModal: false,
    modalImageProps: { url: '', alt: '' },
    status: 'idle',
  };

  async componentDidUpdate(prevProps) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;

    if (prevQuery !== nextQuery) {
      await this.reset();
      this.setState({ status: 'pending' });
      this.fetchImages(nextQuery);
    }
  }

  fetchImages = nextQuery => {
    const { page } = this.state;
    Api.fetchImg(nextQuery, page)
      .then(({ hits }) => {
        if (hits.length === 0) {
          return Promise.reject(new Error('Oops! Nothing found'));
        }

        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          status: 'resolved',
        }));
      })
      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  incrementPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  reset = () => {
    this.setState({ page: 1, images: [] });
  };
  scrollDown = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth',
      });
    }, 1000);
  };

  handleLoadBtnClick = async () => {
    const nextQuery = this.props.searchQuery;
    await this.incrementPage();
    this.fetchImages(nextQuery);
    this.scrollDown();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleImgClick = props => {
    this.setState({ modalImageProps: props });
    this.toggleModal();
  };

  render() {
    const { images, status, error, showModal } = this.state;
    const { url, alt } = this.state.modalImageProps;

    if (status === 'idle') {
      return <div></div>;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <SearchError message={error.message} />;
    }
    if (status === 'resolved') {
      return (
        <>
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <img src={url} alt={alt} className={styles.modalImg} />
            </Modal>
          )}
          <ul className={styles.imageGallery}>
            {images.map(({ id, webformatURL, tags, largeImageURL }) => (
              <ImgGalleryItems
                key={id}
                src={webformatURL}
                url={largeImageURL}
                alt={tags}
                openModal={this.handleImgClick}
              />
            ))}
          </ul>
          <Button handleLoadMore={this.handleLoadBtnClick} />
        </>
      );
    }
  }
}

ImgGallery.propTypes = {};

export default ImgGallery;
