import React from 'react';
import VideoItemList from './VideoitemList';

const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <VideoItemList key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList;