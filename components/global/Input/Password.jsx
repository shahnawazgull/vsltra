"use client";
import React, { useState } from 'react';
import Image from 'next/image'; // Use Next.js Image component for optimized images
import eyeIcn from '/public/assets/images/eye.svg'; // Import the SVG file

const InputPassword = (props) => {
  const { label, inputFor, name, placeholder } = props;

  const [type, setType] = useState('password');

  const handleShowPassword = () =>
    type === 'password' ? setType('text') : setType('password');

  return (
    <div>
      <label htmlFor={inputFor} className='form-label'>
        {label}
      </label>
      <div className='pwd-input'>
        <input
          type={type}
          placeholder={placeholder}
          className='form-control'
          id={inputFor}
          aria-describedby='name'
          name={name}
        />
        <span className='show-icn' onClick={handleShowPassword}>
          {/* Use the Next.js Image component */}
          <Image src={eyeIcn} alt='Show password' width={20} height={20} />
        </span>
      </div>
    </div>
  );
};

export default InputPassword;
