"use client";
// components/Built/Built.js
import mobObj from '/public/assets/images/z-mobile.svg';
import deskObj from '/public/assets/images/z-desktop.svg';
const Built = () => {
  return (
    <section className='why-built-sec'>
      <span className='boxobj-mob d-lg-none'>
        <img src={mobObj.src} alt='' />
      </span>
      <span className='boxobj-desk d-none d-lg-block'>
        <img src={deskObj.src} alt='' />
      </span>
      <div className='container'>
        <h2 className='main-title fontweight'>Why We Built VSLTranslator.io?</h2>
        <p className='desc forclr'>
          We saw a massive gap in the market — many businesses are missing out on international growth simply because of the complexities of VSL translation. So, we created a tool that automates the entire process, allowing you to easily expand your reach to non-English-speaking markets.
        </p>
      </div>
    </section>
  );
};

export default Built;