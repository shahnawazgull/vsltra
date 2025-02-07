'use client'; // Ensure this component is rendered only on the client side
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './header.module.css';
import Link from 'next/link'; // Import the Link component from next/link

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility
  const [isClient, setIsClient] = useState(false); // State to detect client-side rendering

  // Ensures the component runs only in the client-side
  useEffect(() => {
    setIsClient(true); // Set isClient to true once the component mounts
  }, []);

  // Handle the profile icon click to toggle the dropdown
  const handleProfileClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Handle logout - will use Link for redirection
  const handleLogout = () => {
    // Clear any user session or data if necessary
    // Redirect to the home page ('/'), or handle logout
  };

  // if (!isClient) return null; // Ensure that the component is rendered only on the client-side

  return (
    <div className={styles.parentMain}>
      <div className={styles.headerMain}>
        <div className={styles.headerContent}>
          <a href='/voice-and-subtitle'>
            {/* Logo */}
            <Image src="/assets/images/logo.svg" alt="Logo" height={47} width={290} />
          </a>

          {/* Sub Header Section */}
          <div className={styles.subMain}>
            {/* Credits Remaining */}
            <div className={styles.crRem}>
              <p>credits remaining: 10</p>
            </div>

            {/* Profile Icon */}
            <div className={styles.profile} onClick={handleProfileClick}>
              <Image src="/assets/images/admin-user-icn.svg" alt="Profile Icon" height={56} width={56} />
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className={styles.dropdown}>
                {/* Username & Email Subcontainer */}
                <div className={styles.userInfo}>
                  <div className={styles.username}>Olivia Rhye</div>
                  <div className={styles.email}>olivia@example.com</div>
                </div>

                {/* Border Between Username & Email and Subscription Section */}
                <div className={styles.border}></div>

                {/* Manage Subscription Section */}
                <div className={styles.subscription}>
                  <p>Manage Subscription</p>
                  <div className={styles.forLast}>
                    <p>Credit left</p>
                    <p className={styles.forfnt}>10</p>
                  </div>
                  <p>Affiliate</p>
                </div>


                {/* Border Between Subscription Section and Logout */}
                <div className={styles.border}></div>

                {/* Log Out Button */}
                <Link href="/" className={styles.logoutButton}>Log out</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
