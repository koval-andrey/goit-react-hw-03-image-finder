import { IoSearch } from 'react-icons/io5';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import styles from './SearchBar.module.css';

class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    query: '',
  };

  handleQueryChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    const { query } = this.state;
    event.preventDefault();
    if (query.trim() === '') {
      toast.error('Please, enter search query.');
      return;
    }
    this.props.onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <>
        <header className={styles.searchBar}>
          <form className={styles.form} onSubmit={this.handleSubmit}>
            <button type="submit" className={styles.formButton}>
              <span className={styles.formButtonLabel}>
                {' '}
                Search <IoSearch />
              </span>
            </button>
            <input
              className={styles.input}
              type="text"
              value={query}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleQueryChange}
            />
          </form>
        </header>
      </>
    );
  }
}

export default SearchBar;
