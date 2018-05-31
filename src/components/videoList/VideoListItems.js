import React from 'react';
import { Card, Avatar } from 'antd';


const VideoListItem = ({video, onVideoSelect}) => {
    // const video = props.video;
    const { Meta } = Card;

    const imageUrl = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;
    
    return ( 
        <Card onClick={() => onVideoSelect(video)}
            style={{ width: 300 }}
            cover={<img alt="example" src={imageUrl} />}
        >
            <Meta
            avatar={<Avatar src="" />}
            title={videoTitle}
            description="This is the description"
            />
        </Card>

        // <section onClick={() => onVideoSelect(video)} className="card card-promo">
        //     <div className="card-image">
        //         <img src={imageUrl}/>
        //     </div>
        //     <div className="card-detail">
        //         <div className="card-title">
        //             {videoTitle}
        //         </div>
        //     </div>
        // </section>
    )
};

export default VideoListItem;