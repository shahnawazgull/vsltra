"use client"
import carousel from '/public/assets/images/carousel-card-gray.jpg';
import playIcn from '/public/assets/images/play-icon.svg';

const TutorialClip = ({ type }) => {
  return (
    <>
      {type === 'banner' && (
        <div>
          <label className='label-txt'>Tutorial Video:</label>
          <figure className='video-place'>
            {/* Placeholder or actual video can go here if needed */}
          </figure>
        </div>
      )}
      {type === 'video' && (
        <div>
          <figure className='download-preview'>
            <img className='placeholder' src={carousel} alt='carousel preview' />
            <span className='play-btn'>
              <img src={playIcn} alt='play icon' />
            </span>
          </figure>
        </div>
      )}
    </>
  );
};

export default TutorialClip;
