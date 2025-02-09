"use client"; // Make sure you are using this directive in a client-side component
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import  '/public/assets/css/extra.module.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '/public/assets/images/logo.svg';
import whiteArrow from '/public/assets/images/btn-arrow.svg';
import organgeArrow from '/public/assets/images/arrow-orange.svg';

import UserProfile from '/components/global/UserProfile';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className='header'>
      <div className='flex items-center justify-center '>
        <Navbar expand="lg" className="navbar-container">
          <Link className="navbar-brand" href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-lg-end formargin">
            <Nav className="navbar-nav">
              <Link className="nav-link" href="#howItWork">
                How It Works
              </Link>
              <Link className="nav-link" href="#portFolio">
                Portfolio
              </Link>
              <Link className="nav-link" href="#pricing">
                Pricing
              </Link>
              <Link className="nav-link" href="#contactInfo">
                Contact
              </Link>
              <Link className="nav-link" href="/accounts/login">
                Login
              </Link>

            </Nav>
            <div className="header-profile flex gap-2">

            <Link href='#pricing' className='block'>
              <button className="btns header-btn formob">
                Get Started
                <Image className="white" src={whiteArrow} alt="arrow" />
                <Image className="orange" src={organgeArrow} alt="arrow" />
              </button>
            </Link>
              <UserProfile />
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
