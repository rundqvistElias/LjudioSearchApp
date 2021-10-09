import React from 'react';
import '../styles/video.css'; 


const VideoListItem = ({video , handleVideoSelect}) => {

    
    return (
    <div className="videoItemList">
            
        <li onClick={ () => handleVideoSelect(video)} className='video-item item'>
            <img className='video image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
            <div className='header '>{video.snippet.title}</div>
            </div>
        </li>
    </div>
    )
};

export default VideoListItem;