import React, {Component} from 'react'
import './App.css';
import SearchBar from './components/search_bar'
import youtube from './api/youtube';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import Header from './components/header';



class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
}
handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get('/search', {
        params: {
            q: termFromSearchBar
        }
    })
    this.setState({
        videos: response.data.items
    })
};
handleVideoSelect = (video) => {
    this.setState({selectedVideo: video})
}

render() {
  return (
      <div className='ui container'>
          <Header />
          <SearchBar handleFormSubmit={this.handleSubmit}/>
          <div className='ui grid'>
              <div className="ui row">
              <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
              </div>
          </div>
      </div>
  )
}
}
export default App;