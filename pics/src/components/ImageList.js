import React from "react";
import './ImageList.css'

const ImageList = props => {

  // destructure image as i need image.id, image.description & image.urls
  const images = props.images.map(({ description, id, urls }) => {
    return <img className="ui large bordered image" key={id} alt={description} src={urls.regular} />
  })
  return <div className="image-list">{images}</div>;
};

export default ImageList;
