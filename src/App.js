import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import SearchBar from './Components/SearchBar';
import ImgGallery from './Components/ImgGallery';

class App extends Component {
  state = {
    searchQuery: '',
  };
  handleSearchFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };
  render() {
    const { searchQuery } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleSearchFormSubmit} />
        <ImgGallery searchQuery={searchQuery} />
        <ToastContainer />
      </>
    );
  }
}


export default App;
