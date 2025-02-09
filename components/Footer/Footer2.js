"use client";
import Link from 'next/link';
import footerLogo from '../../public/assets/images/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/public/tailwind.css'
// Import your custom styles after Tailwind and Bootstrap
import "/public/assets/css/global.css";
import "/public/assets/css/responsive.css";
const Footer = () => {
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
          <div className='how-term'>
            <div className='footer-nav'>
              {/* Ensure full path is used for anchor links */}
              <Link href='/#howItWork'>
                How it works
              </Link>
              <Link href='/#pricing'>
                Pricing
              </Link>
              <Link href='/#portFolio'>
                Portfolio
              </Link>
              <Link href='/#contactInfo' className='cont'>
                Contact
              </Link>
            </div>
            <div className='term-condition'>
              {/* Links to terms and condition pages */}
              <Link href='/terms/terms-condition'>Terms & Condition</Link>
              <Link href='/terms/privacy-policy'>Privacy Policy</Link>
              <Link href='/terms/refund-policy'>Refund Policy</Link>
              <Link href='/terms/affiliate'>Affiliate Program Policy</Link>

            </div>
          </div>
        </div>
        <div className='secondry-footer'>
          <p className='copy-rgt'>&copy; 2025 VSLTranslator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
