import { Component } from 'react';
import Api from './Components/api';
import Button from './Components/Button';
import Loader from './Components/Loader';
import SearchBar from './Components/SearchBar';
import SearchError from './Components/SearchError';
import Modal from './Components/Modal';
import ImgGallery from './Components/ImgGallery';
import ImgGalleryItems from './Components/ImgGalleryItems';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
