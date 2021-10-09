import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import '../styles/video.css'; 
import MusicLogo from '../assets/musiclogo.jpg'
import ArtistLogo from '../assets/artistlogo.jpg'
import IconButton from '@mui/material/Button';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';



const VideoDetail = ({video}) => {
    const [ playState, setPlayState ] = useState(false);
    
    

    const handlePlay = (event) => {

        setPlayState(prevCheck => !prevCheck);

    };
    




    if (!video) {
        return <div className="homeHeader">
            <div className="homeWrapper">
        <div className="homeSongs">
         <div className="songDiv">
            Songs
        <p>“The music is not in the notes, but in the silence in between.”</p>
        </div>
        <div className="songPic">
        <img src={MusicLogo} alt="music"></img>
        </div>
        </div>
        <div className="homeArtists">
            <div className="artistDiv">
        Artists
        <p>“Creativity takes courage.”</p>
            </div>
            <div className="artistPic">
        <img src={ArtistLogo} alt="artist"></img>
          </div>
        </div>
        </div>

        </div>;
        
    }


  
    
    let videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    const videoLink =`https://youtu.be/${video.id.videoId}`
    const artistLink =`https://youtube.com/channel/${video.snippet.channelId}`
 
    return (
        
        <div className="videoWholeItem">
            <div className='videoWrapper'>
                <ReactPlayer 
                className="musicVideoItem" 
                url={videoSrc} 
                playing={playState}
                width="100%"
                height="100%"
                 />
            </div>
            <div className="btnRow">
                <IconButton style={{backgroundColor: '#ea4f4c', color: '#FFFFFF'}}  className="prevBtn"><SkipPreviousIcon/></IconButton> 
                <IconButton style={{backgroundColor: '#ea4f4c', color: '#FFFFFF'}} onClick={handlePlay} className="playBtn">Play</IconButton>
                <IconButton style={{backgroundColor: '#ea4f4c', color: '#FFFFFF'}}  className="nextBtn"><SkipNextIcon/></IconButton>
                </div>
            <div className='videoDescript'>
                <h4 className='videoHeader'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
                <p className="videoLink"><div className="shareSong">Share song</div>{videoLink}</p>
                <p className="artistLink"><div className="shareArtist">Share artist</div> {artistLink}</p>
            </div>
        </div>
        

    )
}



export default VideoDetail;

