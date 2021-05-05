import PropTypes from 'prop-types';
import styles from './SearchError.module.css';

function SearchError({ message }) {
  return (
    <div className={styles.errorWrapper} role="alert">
      <p>Sorry, something went wrong. Error: {message}</p>
    </div>
  );
}

SearchError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default SearchError;
