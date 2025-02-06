import React, { useContext, useState } from 'react';
import { ColorContext } from '../context/color-context';

const ColorPicker = ({ currColor, needChange, name }) => {
  const [color, setColor] = useState(currColor); // Default color
  const { setBackgroundColor, setForgroundColor } = useContext(ColorContext);

  const handleChange = (event) => {
    if (needChange === 'front') {
      setForgroundColor(event.target.value);
    }
    if (needChange === 'back') {
      setBackgroundColor(event.target.value);
    }
    setColor(event.target.value);
  };

  return (
    <div className='colors-wrp'>
      <div
        className='clr-fld'
        style={{
          backgroundColor: color,
        }}
      >
        <input
          className='clr-input'
          type='color'
          value={color}
          onChange={handleChange}
          name={name}
        />
      </div>
      <p className='valuess'>{color}</p>
    </div>
  );
};

export default ColorPicker;
