import React, { useState } from 'react';

const ImageBrowser = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [    
    { id: 1, url: 'https://github.com/Exove/developer-test/blob/main/material/news-site.png?raw=true' },    
    { id: 2, url: 'https://github.com/Exove/developer-test/blob/main/material/non-directional-graph-cycle.png?raw=true' },    
    { id: 3, url: '	https://github.com/Exove/developer-test/blob/main/material/non-directional-graph.png?raw=true' },  ];

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map(image => (
          <img
            key={image.id}
            src={image.url}
            style={{ height: 200, width: 200, margin: 10 }}
            onClick={() => setSelectedImage(image.id)}
          />
        ))}
      </div>
      
      {selectedImage && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            backgroundColor: 'rgba(0,0,0,0.4)',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        >
          <img
            src={images.find(image => image.id === selectedImage).url}
            style={{ height: '80%', width: '80%' }}
            onClick={() => setSelectedImage(null)}
          />
        </div>
      )}
    </div>
  );
};

export default ImageBrowser;