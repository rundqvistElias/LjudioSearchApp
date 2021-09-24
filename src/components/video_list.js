import React from 'react';
import VideoItem from './video_list_item';
import '../styles/video.css'; 

const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
    });

    return <div className='videoList'>{renderedVideos}</div>;
};
export default VideoList;