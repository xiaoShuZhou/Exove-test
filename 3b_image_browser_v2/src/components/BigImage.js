import React from 'react';

const BigImage = ({ image, selectedImage, setSelectedImage, darkMode, setDarkMode }) => (
    selectedImage && (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
          backgroundColor: darkMode ? 'black' : 'rgba(0,0,0,0.4)',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        <img
          src={image.url}
          style={{ height: '80%', width: '80%' }}
          onClick={() => setSelectedImage(null)}
        />
        <button onClick={() => setDarkMode(!darkMode)}>
          Toggle Dark Mode
        </button>
      </div>
    )
  );

export default BigImage;