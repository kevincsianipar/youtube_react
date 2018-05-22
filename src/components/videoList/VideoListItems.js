import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    // const video = props.video;
    const imageUrl = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;
    
    return ( 
        <section onClick={() => onVideoSelect(video)} className="card card-promo">
            <div className="card-image">
                <img src={imageUrl}/>
            </div>
            <div className="card-detail">
                <div className="card-title">
                    {videoTitle}
                </div>
            </div>
        </section>
    )
};

export default VideoListItem;