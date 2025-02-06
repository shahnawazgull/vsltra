import { useState, React } from 'react';

const TimeInput = ({ id, field, updateBlock, className }) => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
      let value = e.target.value;

      // Allow only digits and colon (:) in the input
      value = value.replace(/[^0-9:]/g, '');
      const colonCount = (value.match(/:/g) || []).length;
      if (colonCount > 1) {
        return
      }

      if (colonCount === 0 && value > 59) {
        return
      } else {
        const [minutes, seconds] = value.split(':');
        if (seconds && (seconds.length > 2 || minutes.length > 2)) {
          return
        }
        if(seconds > 59) {
          return
        }
      }

      if (value.length === 2 && value <= 59) {
        value = value + ":"
      }

      console.log(value)

      setInputValue(value);
      // Call updateBlock to update the state in the parent component
      updateBlock(id, field, value);
    };

    return (
      <input
        type='text'
        placeholder='00:00'
        className={className} // Apply the className prop here without the comment
        id='exampleInput'
        value={inputValue}
        onChange={handleChange}
      />
    );
};

export default TimeInput;
