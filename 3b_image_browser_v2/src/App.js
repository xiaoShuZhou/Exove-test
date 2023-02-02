import React, { useState } from 'react';
import Image from './components/Image';
import ImageArea from './components/ImageArea';
import BigImage from './components/BigImage';


const ImageBrowser = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const images = [    
    { id: 1, url: 'https://github.com/Exove/developer-test/blob/main/material/news-site.png?raw=true' },    
    { id: 2, url: 'https://github.com/Exove/developer-test/blob/main/material/non-directional-graph-cycle.png?raw=true' },    
    { id: 3, url: '	https://github.com/Exove/developer-test/blob/main/material/non-directional-graph.png?raw=true' },  ];

  const image = images.find(img => img.id === selectedImage);

  return (
    <div>
      <ImageArea
        images={images}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
      <BigImage
        image={image}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </div>
  );
};

export default ImageBrowser;