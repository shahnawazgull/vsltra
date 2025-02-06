import React from 'react';

const InputText = (props) => {
  const { label, type, inputFor, name, placeholder } = props;

  return (
    <>
      <label htmlFor={inputFor} className='form-label'>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className='form-control'
        id={inputFor}
        aria-describedby='emailHelp'
        name={name}
      />
    </>
  );
};

export default InputText;
