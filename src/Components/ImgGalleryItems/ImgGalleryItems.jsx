import styles from './ImgGalleryItems.module.css';
import PropTypes from 'prop-types';

function ImgGalleryItems({ src, alt, url, openModal }) {
  return (
    <li className={styles.ImgGalleryItems}>
      <img
        src={src}
        alt={alt}
        className={styles.img}
        onClick={() => openModal({ url, alt })}
      />
    </li>
  );
}
ImgGalleryItems.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
export default ImgGalleryItems;
