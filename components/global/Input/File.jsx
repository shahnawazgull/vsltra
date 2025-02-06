import React, { useState } from 'react';
import Image from 'next/image'; // Import Image for optimized static assets

const InputFile = React.forwardRef(
  ({ label, name, icon, buttonTitle, acceptFile, updateBlock, block, className, hideNoFileText, ...props }, ref) => {
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        setFileName(selectedFile.name);
      } else {
        console.log('No file selected');
        setFileName('');
      }
      if (updateBlock) {
        updateBlock(block.id, 'file', selectedFile);
      }
    };

    return (
      <div className={`browse-field ${className}`}> {/* Add className to outer div */}
        <label htmlFor='formFileLg' className='label-txt'>
          {label}
        </label>
        <div className='custum-browse d-flex align-items-center'>
          <div className='brws'>
            <input
              className='br-input'
              type='file'
              name={name}
              onChange={handleFileChange}
              accept={acceptFile?.join(', ')} // Convert array to string
              {...props}
            />
            <button type="button" className={`btns browse-btn ${className}`}> {/* Apply className to the button */}
              <Image src={icon} alt='icon' width={20} height={20} /> {buttonTitle}
            </button>
          </div>
          {/* Conditionally render the file name or "No file chosen" */}
          {!hideNoFileText && (fileName || 'No file chosen') && <p>{fileName || 'No file chosen'}</p>}
        </div>
        {props.errormessage && <p className='input-error-message'>{props.errormessage}</p>}
      </div>
    );
  }
);

export default InputFile;
