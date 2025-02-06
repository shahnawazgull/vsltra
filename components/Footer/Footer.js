"use client";
import Link from 'next/link';
import footerLogo from '../../public/assets/images/logo.svg';

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - document.querySelector('.header').offsetHeight,
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='primary-footer'>
          <div className='heading-block text-center'>
            <h2 className='main-title'>
              <Link href='#!' className='footer-logo'>
                <img src={footerLogo.src} alt='logo' />
              </Link>
            </h2>
            <p className='footer-desc'>
              With VSLTranslator.io, you can easily create high-converting
              VSLs for multiple countries.
            </p>
          </div>
          <div className='footer-nav'>
            <Link href='#howItWork' onClick={() => scrollToSection('howItWork')}>
              How it works
            </Link>
            <Link href='#pricing' onClick={() => scrollToSection('pricing')}>
              Pricing
            </Link>
            <Link href='#portFolio' onClick={() => scrollToSection('portFolio')}>
              Portfolio
            </Link>
            <Link href='#contactInfo' onClick={() => scrollToSection('contactInfo')} className='cont'>
              Contact
            </Link>
          </div>
        </div>
        <div className='secondry-footer'>
          <p className='copy-rgt'>&copy; 2021 VSLTranslator. All rights reserved.</p>
          <div className='term-condition'>
            <Link href='#!'>Terms &amp; Condition</Link>
            <Link href='#!'>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;