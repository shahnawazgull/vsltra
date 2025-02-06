// src/ProgressBar.js
import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className='progress-wrp'>
      <div className='info'>
        <p className='desc'>
          Any unused Credits will roll over to the next month
        </p>
        <span className='total-pro'>
          {progress / 4}/50 used (reset in 24 days)
        </span>
      </div>
      <div className='progress-bar-container'>
        <div
          className='progress-bar'
          style={{ width: `${progress / 2}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
