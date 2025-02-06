"use client";
// components/Work/Work.js
import carouselCard from '/public/assets/images/carousel-card-gray.jpg';
import playIcn from '/public/assets/images/play-icon.svg';
import num1 from '/public/assets/images/Number-1-One--Streamline-Retro.svg';
import num2 from '/public/assets/images/Number-2-Two--Streamline-Retro.svg';
import num3 from '/public/assets/images/Number-3-Three--Streamline-Retro.svg';
import num4 from '/public/assets/images/Number-4-Four--Streamline-Retro.svg';

const Work = () => {
  return (
    <section id='howItWork' className='how-work'>
      <div className='container'>
        <div className='work-steps'>
          <div className='presentation'>
            <h2 className='main-title fontweight'>Here’s How It Works</h2>
            <p className='desc'>
              Yes, translating a VSL isn't complicated, but the real
              difficulty lies in matching the translated voiceover with the
              video scenes. And if your video editor doesn't speak the
              language you're targeting, this becomes even more time-consuming
              and costly.
            </p>
            <figure>
              <img className='placeholder' src={carouselCard.src} alt='img' />
              <span className='play-btn'>
                <img src={playIcn.src} alt='play' />
              </span>
            </figure>
          </div>

          <div className='work-cards'>
            <div className='detail'>
              <strong className='count'>
                <img src={num1.src} alt='num' />
              </strong>
              <h5>Upload Your VSL</h5>
              <p>
                Start by uploading your English VSL and the transcription
                file.{' '}
              </p>
            </div>
            <div className='detail'>
              <strong className='count'>
                <img src={num2.src} alt='num' />
              </strong>
              <h5>Add Your Translation</h5>
              <p>
                Upload the transcription of the language you want to target
                (e.g., German, French, Italian).
              </p>
            </div>
            <div className='detail'>
              <strong className='count'>
                <img src={num3.src} alt='num' />
              </strong>
              <h5>Integrate with AI Voices</h5>
              <p>
                 Just provide your Eleven Labs API key and voice ID for the
                voiceover in the new language.
              </p>
            </div>
            <div className='detail'>
              <strong className='count'>
                <img src={num4.src} alt='num' />
              </strong>
              <h5>Process</h5>
              <p>
                 VSLTranslator.io will generate a perfectly synchronized
                voiceover that matches each scene of your original VSL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;