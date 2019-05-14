import React from "react";

const ImageList = props => {

  const images = props.images.map(image => {
    return <img className="ui medium bordered image" key={image.id} alt="" src={image.urls.regular} />
  })
  return <div>{images}</div>;
};

export default ImageList;
