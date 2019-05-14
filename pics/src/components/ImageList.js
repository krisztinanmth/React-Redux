import React from "react";
import "./ImageList.css";
import ImageCard from './ImageCard';

const ImageList = props => {
  const images = props.images.map(image => {
    return (
      <ImageCard
        className="ui large bordered image"
        key={image.id}
        image={image}
      />
    );
  });
  return (
    <div>
      <div className="image-list">{images}</div>
    </div>
  );
};

export default ImageList;
