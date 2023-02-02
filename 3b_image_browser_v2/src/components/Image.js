import React from 'react';

const Image = ({ image, selectedImage, setSelectedImage }) => (
    <img
      src={image.url}
      style={{ height: 100, width: 100, margin: 10 }}
      onClick={() => setSelectedImage(image.id)}
    />
  );

  export default Image;