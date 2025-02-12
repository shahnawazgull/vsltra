"use client";
import Image from 'next/image';
import Link from 'next/link';
import styles from '/public/assets/css/done.module.css';  // Correct path for CSS module

const PasswordResetSent = () => {
  return (
    <main className={styles.main}>
      <div className={styles.contant}>
        <a href="/">
          <Image
            src="/assets/images/vsl-logo.svg"
            alt="Logo"
            width={270}
            height={50}
          />
        </a>
        <h2 className={styles.heading}>Password Reset Sent</h2>
        <h4 className={styles.subheading}>
          We have sent you an email with instructions on how to reset your password.
        </h4>
        <a href="/accounts/login">Go to Login</a>
      </div>
    </main>
  );
};

export default PasswordResetSent;
