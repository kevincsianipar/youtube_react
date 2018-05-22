import React from 'react';
import VideoListItems from "./VideoListItems"

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return(
            <VideoListItems 
                onVideoSelect={props.onVideoSelect}
                key={video.etag} 
                video={video} 
            />
        ) 
    });

    return ( 
        <div className="row flex-column col-4">
            {videoItems}
        </div>
    );
}

export default VideoList;