import React, { useState, useEffect } from "react";

const Slider = () => {
  // Have its value stored in state
  const [value, setValue] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Fire an event with the value only when the user has stopped moving the slider
  useEffect(() => {
    if (!isDragging) {
      console.log(`Slider value: ${value}`);
    }
  }, [isDragging, value]);

  // Have it fire an event with the value
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleOnMouseDown = () => {
    setIsDragging(true);
  };

  const handleOnMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={handleOnChange}
        onMouseDown={handleOnMouseDown}
        onMouseUp={handleOnMouseUp}
      />
      <p>Value: {value}</p>
    </div>
  );
};

export default Slider;