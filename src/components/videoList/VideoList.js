import React from 'react';

const VideoList = () => {
    return ( 
        <div class="mdc-card">
            <div class="mdc-card__media mdc-card__media--square">
                <div class="mdc-card__media-content">Title</div>
            </div>
            <div class="mdc-card__actions">
                <div class="mdc-card__action-buttons">
                    <button class="mdc-button mdc-card__action mdc-card__action--button">Action 1</button>
                    <button class="mdc-button mdc-card__action mdc-card__action--button">Action 2</button>
                </div>
            </div>
        </div>
    );
}

export default VideoList;