"use client";
// components/Story/Story.js
import powerObj1 from '/public/assets/images/power-obj1.svg';
import powerObj2 from '/public/assets/images/power-obj2.svg';
import powerObj3 from '/public/assets/images/power-obj3.svg';
import grayCard from '/public/assets/images/carousel-card-gray.jpg';
import playIcn from '/public/assets/images/play-icon2.svg';

const Story = () => {
  return (
    <section id='portFolio' className='power-sec'>
      <div className='container'>
        <div className='heading-block '>
          <h2 className='main-title' >Success Stories</h2>
          <p>See How VSLTranslator.io Helped Brands Unlock New Markets</p>
        </div>
        <div className='ext-node'>
          <span className='obj pwr-obj1'>
            <img src={powerObj1.src} alt='obj' />
          </span>
          <span className='obj pwr-obj2'>
            <img src={powerObj2.src} alt='obj' />
          </span>
          <span className='obj pwr-obj3'>
            <img src={powerObj3.src} alt='obj' />
          </span>
          <div className='video-wrp'>
            <div className='video-card'>
              <figure>
                <img className='placeholder' src={grayCard.src} alt='img' />
                <span className='play-btn'>
                  <img src={playIcn.src} alt='play' />
                </span>
              </figure>
              <h3 className='text-center'>English Video</h3>
            </div>
            <div className='video-card'>
              <figure>
                <img className='placeholder' src={grayCard.src} alt='img' />
                <span className='play-btn'>
                  <img src={playIcn.src} alt='play' />
                </span>
              </figure>
              <h3 className='text-center'>French Version</h3>
            </div>
            <div className='video-card'>
              <figure>
                <img className='placeholder' src={grayCard.src} alt='img' />
                <span className='play-btn'>
                  <img src={playIcn.src} alt='play' />
                </span>
              </figure>
              <h3 className='text-center'>German Version</h3>
            </div>
            <div className='video-card'>
              <figure>
                <img className='placeholder' src={grayCard.src} alt='img' />
                <span className='play-btn'>
                  <img src={playIcn.src} alt='play' />
                </span>
              </figure>
              <h3 className='text-center'>Spanish Version</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;