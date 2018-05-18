import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//search bar
import SearchBar from './components/searchBar/SearchBar';
import './components/searchBar/SearchBar.css';

const API_KEY = 'AIzaSyARpNovs7cj_dPnplGjEbvYU6i3WUNPb_8';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SearchBar />
        </header>
      </div>
    );
  }
}

export default App;
