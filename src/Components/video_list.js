//AIzaSyDgOHAsSOvQksUHo1lDaCmXK1tR_zjxm7w

import React from 'react';
import VideoListItem from './video_list_item';

const VideoList =(props) =>{
// let videoList = props.listval.map((video,i)=>{
    //         return <p>{video.id }</p>
    // });

   let listloop=  props.listval.map(( video,index ) =>{
        return   <VideoListItem 
         video={video}
          key={video.etag} 
          OnVideoClick={props.OnVideoClick}
          />
    })
    return (
        <div>
            <ul className="col-md-4 list-group">
                {props.listval.length} 
              { listloop }
            </ul>
        </div>
    );
};

export default VideoList;