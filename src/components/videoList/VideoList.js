import React from 'react';

const VideoList = (props) => {
    return ( 
        <div className="row flex-column col-4">
            <div className="">
                {props.videos.length}
            </div>
        </div>
    );
}

export default VideoList;