import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = "AIzaSyCqHnmFK-1qvlkWkwch2JGu8uCDmOqb2rU"

import '../sass/index.scss'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch();
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const onSearchTermChange = _.debounce(term => { this.videoSearch(term) }, 300)
    return (
      <div>
        <SearchBar onSearchTermChange ={ onSearchTermChange } />
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
          videos={ this.state.videos } />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));
