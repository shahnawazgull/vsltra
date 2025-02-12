"use client"
import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import '/public/assets/css/password-reset.css'
import Link from 'next/link';
const ResetPassword = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send request to API)
    console.log("Email submitted:", email);
  };

  return (
    <>
      <main className='.login-sec.att-log-bg main'>
        <div className="contant">
          <a href='/'>
            <Image
              src="/assets/images/vsl-logo.svg"
              alt="Logo"
              width={270}
              height={50}
            />
          </a>

          <form className="form" onSubmit={handleSubmit}>
            <h2
              style={{
                color: '#000000',
                fontWeight: 600,
                fontSize: '20px',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              Reset Password
            </h2>

            {/* Email Input Field */}
            <fieldset name="email">
              <legend>Email:</legend>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </fieldset>

            {/* Submit Button */}
            <Link href='/accounts/reset-done'>
            <button className='button'
              style={{
                color: 'white',
                backgroundColor: '#FF6500',
                borderColor: '#000000',
                width:'346px',
                textAlign:'center',
              }}
              id="sign-in"
              type="submit"
            >
              Send Email
            </button>
            </Link>
          </form>
        </div>
      </main>
    </>
  );
};

export default ResetPassword;
