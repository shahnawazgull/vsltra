"use client";
// components/Commission/Commission.js
import num1 from '/public/assets/images/Number-1-One--Streamline-Retro.svg';
import num2 from '/public/assets/images/Number-2-Two--Streamline-Retro.svg';
import num3 from '/public/assets/images/Number-3-Three--Streamline-Retro.svg';
import Image from 'next/image'; // Import the Image component
import Link from 'next/link';
import whiteArrow from '/public/assets/images/btn-arrow.svg';
import organgeArrow from '/public/assets/images/arrow-orange.svg'
const Commission = () => {
  return (
    <section className='commision-sec' id='commission'>
      <div className='container'>
        <div className='heading-block '>
          <h2 className='main-title text-center fontweight'>
            Become a VSLTranslator.io Affiliate —<br />
            Earn 30% Recurring Commissions!
          </h2>
          <p className='desc text-center'>
            When you refer customers to VSLTranslator.io, you earn 30% recurring
            commissions on every payment they make. That means as long as the
            customer you referred continues to use our service, you'll get paid
            month after month building a steady stream of passive income!
          </p>
        </div>
        <div className='work-cards'>
          <div className='detail text-center'>
            <strong className='count'>
              <img src={num1.src} alt='num' />
            </strong>
            <h5 className='text-center'>Sign Up</h5>
            <p className='text-center forwidth'>
              Joining is quick and easy and it's free to become an affiliate!
            </p>
          </div>
          <div className='detail text-center'>
            <strong className='count'>
              <img src={num2.src} alt='num' />
            </strong>
            <h5 className='text-center'>Share Your Link</h5>
            <p className='text-center forwidth'>
              Promote VSLTranslator.io on your website, blog, social media, or
              with your network.
            </p>
          </div>
          <div className='detail text-center'>
            <strong className='count'>
              <img src={num3.src} alt='num' />
            </strong>
            <h5 className='text-center'>Earn Commissions</h5>
            <p className='text-center forwidth'>
              Earn 30% of each customer's monthly payments for as long as they
              stay, when they sign up through your link.
            </p>
          </div>
        </div>
        <div className='sign-up-btn d-flex justify-content-center'>
          <Link href='#pricing' className='block'>
            <button className="btns forbtn">
              Sign Up Now
              <Image src="/assets/images/btn-arrow.svg" alt="arrow" width={24} height={24} />

            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Commission;