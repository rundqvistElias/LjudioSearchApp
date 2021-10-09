import React, {Component} from 'react'
import './App.css';
import SearchBar from './components/search_bar'
import youtube from './api/youtube';

import VideoList from './components/video_list';
import Header from './components/header';
import Footer from './components/footer';
import VideoPlayer from './components/video_player';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



class App extends Component {
    constructor(props) {
        super(props);
        
        this._TogglePrev = this._TogglePrev.bind(this);
        this._ToggleNext = this._ToggleNext.bind(this);
  this.state = {
    videos: [],
    selectedIndex: 0
    }
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

    console.log("this is resp: ", response)
};
handleVideoSelect = (video) => {
    this.setState({selectedIndex: video})
}
_ToggleNext() {
    if(this.state.selectedIndex === this.state.videos.length - 1)
        return;

    this.setState(prevState => ({
        selectedIndex: prevState.selectedIndex + 1
    }))
}


    

_TogglePrev() {
    if(this.state.selectedIndex === 0)
     return;

    this.setState(prevState => ({
        selectedIndex: prevState.selectedIndex - 1
    }))

}


render() {
  return (
      <div className='page container'>
          <Header />
          
          <div className='video grid'>
              <div className="ui row">
              <div className="video Item column">
              <SearchBar handleFormSubmit={this.handleSubmit}/>

              <Router>
                  <li>
                      <Link to="/player">Player</Link>
                      </li>


                      <Switch>
                        <Route exact path="/player">
                              <VideoPlayer video={this.state.selectedIndex} />
                        </Route>

                        </Switch>
                        </Router>

                            <button onClick={this._ToggleNext}>CLICK TO GO NEXT</button>
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