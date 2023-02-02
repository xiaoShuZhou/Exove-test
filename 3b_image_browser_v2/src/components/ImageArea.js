import React from 'react';
import Image from './Image';

const ImageArea = ({ images, selectedImage, setSelectedImage }) => (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {images.map(image => (
        <Image
          key={image.id}
          image={image}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      ))}
    </div>
  );

export default ImageArea;