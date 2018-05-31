import _ from 'lodash';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import YTSearch from 'youtube-api-search';

//import 'antd/dist/antd.css';

//search bar
import SearchBar from './components/searchBar/SearchBar';
import VideoList from './components/videoList/VideoList'
import VideoDetail from './components/videoDetail/VideoDetail'

import './components/sass/main.scss';

const API_KEY = 'AIzaSyARpNovs7cj_dPnplGjEbvYU6i3WUNPb_8';


class App extends Component {
  constructor(props){
    super(props);

    this.state={
      videos:[],
      selectedVideo:null
    };

    this.videoSearch('');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) =>{
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0] 
      });
      //this.setState({ videos }); //same as above
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 400); //throttling search

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SearchBar onSearchTermChange={videoSearch} />
        </header>
        <body className="App-body">
          <VideoDetail video = {this.state.selectedVideo}/>
          <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} 
          />
        </body>
      </div>
    );
  }
}

export default App;
