import ReactPlayer from 'react-player';


const VideoPlayer = ({video}) => {

    
    console.log("selected video: " + video);
    if (!video){
        return <div>hej</div>
        
    }
    const nextSrc = ``
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className='videoWrapper'>
                <ReactPlayer 
                className="musicVideoItem" 
                url={videoSrc}
                width="100%"
                height="100%"
                 />

                <div className='videoDescript'>
                <h4 className='videoHeader'></h4>
                <p></p>

            </div>
            </div>
        </div>
        
    )
    
}

export default VideoPlayer

