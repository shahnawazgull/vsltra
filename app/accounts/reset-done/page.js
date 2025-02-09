"use client"
import Image from 'next/image';
import Link from 'next/link';
import styles from  '/public/assets/css/done.css'

const PasswordResetSent = () => {
  return (
    <main>
      <div className='contant'>
        <Link href='/'>
        <Image
          src="/assets/images/vsl-logo.svg"
          alt="Logo"
          width={270}
          height={50}
        />
        </Link>
        {/* Password Reset Sent Heading */}
        <h2 className='heading'>Password Reset Sent</h2>

        <h4 className='subheading'>
          We have sent you an email with instructions on how to reset your
          password.
        </h4>

        <Link href="/accounts/login">Go to Login</Link>
      </div>
    </main>
  );
};

export default PasswordResetSent;
