"use client";
import Image from 'next/image'; // Import the Image component
import whiteArrow from '/public/assets/images/btn-arrow.svg';
import organgeArrow from '/public/assets/images/arrow-orange.svg';
import Link from 'next/link';
const GetInTuch = () => {
  return (
    <>
      <section className='get-tuch-sec' id='contactInfo'>
        <div className='container'>
          <div className='heading-block text-center'>
            <h2 className='main-title text-lg-center fontweight'>Get in touch</h2>
            <p className='desc text-lg-center'>
              We’d love to hear from you. Please fill out this form.
            </p>
          </div>
          <form className='form-block'>
            <div className='custom-margin'>
              <label htmlFor='exampleInputName' className='form-label'>
                Full Name
              </label>
              <input
                type='text'
                placeholder='full Name'
                className='form-control'
                id='exampleInputName'
                aria-describedby='name'
              />
            </div>
            <div className='custom-margin'>
              <label htmlFor='exampleInputEmail1' className='form-label'>
                Email
              </label>
              <input
                type='email'
                placeholder='you@company.com'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
              />
            </div>
            <div className='form-check'>
              <label htmlFor='floatingTextarea' className='form-label'>
                Message
              </label>
              <textarea
                className='form-control'
                id='floatingTextarea'
              ></textarea>
            </div>
            <Link href='' className='block'>
              <button className="btns">
                Get Started
                <Image className="white" src={whiteArrow} alt="arrow" />
                <Image className="orange" src={organgeArrow} alt="arrow" />
              </button>
            </Link>
          </form>
        </div>
      </section>
    </>
  );
};
export default GetInTuch;
