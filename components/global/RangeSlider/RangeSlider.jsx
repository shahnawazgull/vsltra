"use client"; // Ensure this runs only on the client side
import React, { useState } from 'react';
import ReactSlider from 'react-slider';

const RangeSlider = ({ needChange }) => {
  // Dummy data initialization for the slider
  const [value, setValue] = useState(30);  // Default value for background-music-percent
  const [size, setSize] = useState(70);    // Default value for box size
  const [hght, setHght] = useState(150);   // Default value for box height
  const [fontSz, setFontSz] = useState(18); // Default value for font size

  // Handle changes for font, box size, and other settings
  const handleChange = (newValue) => {
    setValue(newValue);

    if (needChange === 'font') {
      setFontSz(newValue);  // Update font size
    } else if (needChange === 'background-music-percent') {
      setValue(newValue);  // Update music volume percent
    }
  };

  const handleSizeChange = (newSize) => {
    setSize(newSize);
    if (needChange === 'box-size') {
      setSize(newSize);  // Update box size
    }
  };

  const handleHighChange = (newHeight) => {
    setHght(newHeight);
    if (needChange === 'box-height') {
      setHght(newHeight);  // Update box height
    }
  };

  return (
    <div className="wrp-slidr" style={{ padding: '20px' }}>
      {/* Font Size Slider */}
      {needChange === 'font' && (
        <div>
          <ReactSlider
            min={16}
            max={26}
            value={fontSz}
            onChange={handleChange}
            className="range-slider"
            thumbClassName="thumb"
            trackClassName="track"
          />
          <p className="valuess">Font Size: {fontSz}px</p>
        </div>
      )}

      {/* Box Size Slider */}
      {needChange === 'box-size' && (
        <div>
          <ReactSlider
            min={50}
            max={100}
            value={size}
            onChange={handleSizeChange}
            className="range-slider"
            thumbClassName="thumb"
            trackClassName="track"
          />
          <p className="valuess">Box Size: {size}px</p>
        </div>
      )}

      {/* Box Height Slider */}
      {needChange === 'box-height' && (
        <div>
          <ReactSlider
            min={96}
            max={200}
            value={hght}
            onChange={handleHighChange}
            className="range-slider"
            thumbClassName="thumb"
            trackClassName="track"
          />
          <p className="valuess">Box Height: {hght}px</p>
        </div>
      )}

      {/* Background Music Slider */}
      {needChange === 'background-music-percent' && (
        <div>
          <ReactSlider
            min={0}
            max={100}
            value={value}
            onChange={handleChange}
            className="range-slider"
            thumbClassName="thumb"
            trackClassName="track"
          />
          <p className="valuess">Music Volume: {value}%</p>
        </div>
      )}
    </div>
  );
};

export default RangeSlider;
