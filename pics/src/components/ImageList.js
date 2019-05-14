import React from "react";

const ImageList = props => {

  // destructure image as i need image.id, image.description & image.urls
  const images = props.images.map(({ description, id, urls }) => {
    return <img className="ui medium bordered image" key={id} alt={description} src={urls.regular} />
  })
  return <div>{images}</div>;
};

export default ImageList;
