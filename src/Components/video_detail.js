import React from 'react';

const VideoDetails = (props) =>{

    if( !props.video){
            return (
                <div>Loading...</div>
            )
    }
    let videoId = props.video.id.videoId;
    let PlayURL = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={PlayURL}></iframe>
            </div>
            <div className="video-detail">
                    <div>{props.video.snippet.title}</div>
                    <div>{ props.video.snippet.description}</div>
            </div>
        </div>
    );
    
}

export default VideoDetails;