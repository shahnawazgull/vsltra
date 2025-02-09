import React from 'react';
import Image from 'next/image';
import HeaderAdmin from '/components/Header/HeaderAdmin';
import '/components/Header/header.module.css';
import '/app/styles.css'

const LoginPage = () => {
  return (
    <>
      <HeaderAdmin />
      <div className="login-sec att-log-bg">
        {/* Subscription Information Start */}
        <div className="subscription-content">
          <div className="subscription-text">
            <p className="sub-p">Subscription Details</p>
            <p className="bill">Manage Billing Info</p>
          </div>
          <div className="subscription-for-border">
            <div className="subscription-plan">
              <p className="cr-text">Current Plan</p>
              <p className="subscription-btn">Premium</p>
            </div>
            <div className="subscription-plan subscription-subs">
              <p className="cr-text">Subscription Status</p>
              <p className="subscription-act">Active</p>
            </div>
          </div>
        </div>
        {/* Subscription Information End */}

        {/* Additional Credit Purchase Section Start */}
        <div className="subscription-second-main">
          <div className="subscription-heading">Need More Translations?</div>
          <p>
            Expand your global reach with ease! Add more VSL translations as needed, with a minimum of 5, and start
            tapping into new international markets.
          </p>
        </div>

        <div className="subscription-credit-box">
          <div className="subscription-box-cont">
            <p className="subscription-cr">Buy More Credits</p>
            <p className="subscription-dollar">$5 Each</p>
            <input type="text" name="credit" id="subscription-credit" placeholder="Enter the amount of credits" />
            <button>Buy</button>
          </div>
        </div>
        {/* Additional Credit Purchase Section End */}

        {/* Subscription Plans Section Start */}
        <div className="subscription-main-head">
          <h1>Choose The Plan That Fits Your Needs</h1>
        </div>

        <div className="subscription-plans">
          {/* Growth Plan */}
          <div className="subscription-box">
            <p className="subscriptionbox-head subscription-box2">Pro Plan</p>
            <p id="p">Perfect for scaling your video advertising campaigns</p>
            <div className="subscription-price">
              <h1>$497</h1>
              <span>/Month</span>
            </div>
            <p id="p" className="subscription-p-marg">$19.88 per video</p>
            <p className="subscription-p">
              <Image src="/assets/check.svg" alt="Checkmark" width={24} height={24} style={{ marginRight: '8px' }} /> 25 Videos per month
            </p>
            <button className="subscription-Downgrade-txt subscription-button">Downgrade Subscription</button>
          </div>

          {/* Premium Plan */}
          <div className="subscription-box subscription-box-sub">
            <p className="subscriptionbox-head">Premium plan</p>
            <p className="subscription-p-pro subscriptionp-pro2">Ideal for high-volume marketers and agencies</p>
            <div className="subscription-price">
              <h1 className="subscription-select">$997</h1>
              <span>/Month</span>
            </div>
            <p className="subscriptionp-pro subscriptionp-pro2" style={{ color: 'white', marginTop: '-18px' }}>
              $16.61 per video
            </p>
            <p className="subscription-p-pro subscriptionp-pro2">
              <Image src="/assets/images/white-check.svg" alt="White Checkmark" width={24} height={24} style={{ marginRight: '8px' }} /> 50 Videos per month
            </p>
            <button id="subscription-up" className='subscription-button'>Cancel Subscription</button>
          </div>
        </div>
        {/* Subscription Plans Section End */}
      </div>
    </>
  );
};

export default LoginPage;