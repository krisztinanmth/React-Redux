import React from 'react';

const VideoItem = ({ video }) => {
  const { description, thumbnails, title } = video.snippet;

  return (
    <div>
      <img alt={description} src={thumbnails.medium.url} />
      {title}
    </div>
  );
};

export default VideoItem;
