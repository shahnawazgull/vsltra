"use client"
import Image from 'next/image';  // Use Next.js Image component for optimized images
import ColorPicker from './ColorPicker';
import RangeSlider from './RangeSlider/RangeSlider';
import uloadIcn from '/public/assets/images/upload-icn-black.svg';
import React, { useState } from 'react';

const BrowseFld = React.forwardRef(
  (
    {
      fldLbl,
      fileName,
      icn,
      category,
      currColor,
      needChange,
      currFont,
      name,
      updateBlockBundle,
      ...props
    },
    ref
  ) => {
    const [inputEmptyErrorMessage, setInputErrorMessage] = useState('');

    // Input validation
    function validateInput(e) {
      if (e.target.value.trim() === '') {
        setInputErrorMessage('This field is required');
      } else {
        setInputErrorMessage('');
      }
    }

    return (
      <div>
        {/* File input for browsing */}
        {category === 'browse' && (
          <div className="browse-field">
            <label htmlFor="formFileLg" className="label-txt">
              {fldLbl}
            </label>
            <div className="custum-browse d-flex align-items-center">
              <div className="brws">
                <input className="br-input" type="file" {...props} onBlur={validateInput} />
                <button type="button" className="btns browse-btn">
                  <Image src={icn} alt="icon" width={20} height={20} /> {fileName}
                </button>
              </div>
              <p>No file chosen</p>
            </div>
          </div>
        )}

        {/* Text input field */}
        {category === 'field' && (
          <div className="browse-field">
            <label htmlFor="exampleInput" className="label-txt">
              {fldLbl}
            </label>
            <input
              type="text"
              placeholder={fileName}
              className="form-control"
              id="exampleInput"
              aria-describedby="emailHelp"
              name={name}
              onBlur={validateInput}
              {...props}
            />
            {(inputEmptyErrorMessage || props.errormessage) && (
              <p className="input-error-message">{inputEmptyErrorMessage || props.errormessage}</p>
            )}
          </div>
        )}

        {/* Range slider */}
        {category === 'range' && (
          <div className="browse-field">
            <label htmlFor="exampleInput" className="label-txt">
              {fldLbl}
            </label>
            <RangeSlider updateBlockBundle={updateBlockBundle} needChange={needChange} />
          </div>
        )}

        {/* Color picker */}
        {category === 'picker' && (
          <div className="browse-field">
            <label htmlFor="exampleInput" className="label-txt">
              {fldLbl}
            </label>
            <ColorPicker needChange={needChange} currColor={currColor} name={name} />
          </div>
        )}

        {/* File upload section */}
        {category === 'upload' && (
          <div className="browse-field">
            <label htmlFor="formFileLg" className="label-txt">
              {fldLbl}
            </label>
            <div className="custum-browse custum-browse-v2 d-flex align-items-center">
              <div className="brws">
                <input className="br-input" type="file" {...props} />
                <button type="button" className="btn get-start browse-btn">
                  <Image src={uloadIcn} alt="upload icon" width={20} height={20} /> &nbsp;&nbsp; Choose file
                </button>
              </div>
              {props.validation?.valid === false && props.validation.field === name && (
                <p className="input-error-message">{props.validation?.message}</p>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
);

export default BrowseFld;
