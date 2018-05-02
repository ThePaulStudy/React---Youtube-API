import React from 'react';

const VideoDetail = (props) => {
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={props} frameborder="0"></iframe>
            </div> 
            <div className="detail">
                <div></div>
            </div>
        </div>
    )
}