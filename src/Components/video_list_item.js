import React from 'react';

const videoListItem = (props) =>{
    //console.log(props.video);
    let ImagePath =props.video.snippet.thumbnails.default.url;
    let VideoTitle= props.video.snippet.title;
    
    
    return (
        <li  onClick={ ()=>props.OnVideoClick(props.video) } className="list-group-item"> 
            <div className="video-list media">
                <div className="media-left">
                        <img  className="media-object" src={ImagePath}/>
                </div>
                 <div className="media-body">
                    <div className="media-heading">
                        { VideoTitle }
                    </div>
                </div>
            </div>
        </li>
    );
}

export default videoListItem;
