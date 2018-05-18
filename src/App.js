import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import YTSearch from 'youtube-api-search';

//search bar
import SearchBar from './components/searchBar/SearchBar';
import './components/searchBar/SearchBar.css';

import VideoList from './components/videoList/VideoList'
import './components/videoList/VideoList.css';

const API_KEY = 'AIzaSyARpNovs7cj_dPnplGjEbvYU6i3WUNPb_8';


class App extends Component {
  constructor(props){
    super(props);

    this.state={
      videos:[]
    }

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) =>{
      this.setState({ videos: videos });
      //this.setState({ videos }); //same as above
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SearchBar />
        </header>
        <body className="App-body">
          <VideoList videos={this.state.videos} />
        </body>
      </div>
    );
  }
}

export default App;
