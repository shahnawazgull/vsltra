"use client";
// components/Profit/Profit.js
import deskObj from '/public/assets/images/z-desktop2.svg';
import mobObj from '/public/assets/images/z-mobile2.svg';
import Link from 'next/link';
import whiteArrow from '/public/assets/images/btn-arrow.svg';
import organgeArrow from '/public/assets/images/arrow-orange.svg'
import Image from 'next/image'; // Import the Image component

const Profit = () => {
  return (
    <section className='why-built-sec exp-bussiness'>
      <span className='retro-obj arch'>
        <img src={deskObj.src} alt='' />
      </span>
      <span className='retro-obj cross'>
        <img src={mobObj.src} alt='' />
      </span>
      <div className='container'>
        <h2 className='main-title fontweight'>
          Expand Your Business <br /> Maximize Your Profits
        </h2>
        <p className='desc forclr'>
          VSLTranslator.io takes care of this automatically, ensuring the new
          voice matches seamlessly with the video, just like in the original.
        </p>
        <Link href='#pricing' className='block'>
              <button className="btns">
                Get Started
                <Image className="white" src={whiteArrow} alt="arrow" />
                <Image className="orange" src={organgeArrow} alt="arrow" />
              </button>
            </Link>
      </div>
    </section>
  );
};

export default Profit;
