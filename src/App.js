import React, {Component} from 'react'
import './App.css';
import SearchBar from './components/search_bar'
import youtube from './api/youtube';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import Header from './components/header';
import Footer from './components/footer';



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
      <div className='page container'>
          <Header />
          
          <div className='video grid'>
              <div className="ui row">
              <div className="video Item column">
              <SearchBar handleFormSubmit={this.handleSubmit}/>
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="video-List-column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    <Footer />
              </div>
          </div>
      </div>
  )
}
}
export default App;