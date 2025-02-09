// components/Banner.js
'use client'; // Ensuring this is rendered on the client-side

import Link from 'next/link';
import Image from 'next/image';
import playIcn from '/public/assets/images/play-icon.svg';
import cursorHead from '/public/assets/images/Cursor-Head--Streamline-Retro.svg';
import carouselCard from '/public/assets/images/carousel-card-gray.jpg';
import whiteArrow from '/public/assets/images/btn-arrow.svg';
import organgeArrow from '/public/assets/images/arrow-orange.svg';

const Banner = () => {
  return (
    <section className="banner-sec text-center">
      <div className="effect-div">
        <div className="container">
          <h1 className="main-title text-center fontweight">
            Unlock Global Markets With <br />
            Effortless VSL <span>Translations</span>
            <span className="cursor-head d-none d-lg-block">
              <Image src={cursorHead} alt="cursor head" width={20} height={20} />
            </span>
          </h1>
          <p className="desc text-center">
            Expand your VSL beyond the USA and UK, and tap into new profitable markets like France, Germany, Spain, Italy and more.
          </p>
          <div>
            <Link href="#pricing" className="block">
              <button className="btns header-btn">
                Get Started
                <Image className="white" src={whiteArrow} alt="white arrow" width={20} height={20} />
                <Image className="orange" src={organgeArrow} alt="orange arrow" width={20} height={20} />
              </button>
            </Link>
          </div>
          <div className="banner-img">
            <figure>
              <Image
                className="placeholder"
                src={carouselCard}
                alt="carousel card"
                width={500} // Set width and height to avoid layout shifts
                height={300}
              />
              <span className="play-btn">
                <Image src={playIcn} alt="play icon" width={40} height={40} />
              </span>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
