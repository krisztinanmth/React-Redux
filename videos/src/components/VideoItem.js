import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  const { description, thumbnails, title } = video.snippet;

  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img className="ui image" alt={description} src={thumbnails.medium.url} />
      <div className="content">
        <div className="header">
          {title}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
