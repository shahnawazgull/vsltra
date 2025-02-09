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
      <div className="content">
        <div className="text">
          <p className="sub-p">Subscription Details</p>
          <p className="bill">Manage Billing Info</p>
        </div>
        <div className="for-border">
          <div className="plan">
            <p className="cr-text">Current Plan</p>
            <p className="btn">Premium</p>
          </div>
          <div className="plan subs">
            <p className="cr-text">Subscription Status</p>
            <p className="act">Active</p>
          </div>
        </div>
      </div>
      {/* Subscription Information End */}

      {/* Additional Credit Purchase Section Start */}
      <div className="second-main">
        <div className="heading">Need More Translations?</div>
        <p>
          Expand your global reach with ease! Add more VSL translations as needed, with a minimum of 5, and start
          tapping into new international markets.
        </p>
      </div>

      <div className="credit-box">
        <div className="box-cont">
          <p className="cr">Buy More Credits</p>
          <p className="dollar">$5 Each</p>
          <input type="text" name="credit" id="credit" placeholder="Enter the amount of credits" />
          <button>Buy</button>
        </div>
      </div>
      {/* Additional Credit Purchase Section End */}

      {/* Subscription Plans Section Start */}
      <div className="main-head">
        <h1>Choose The Plan That Fits Your Needs</h1>
      </div>

      <div className="plans">
        {/* Growth Plan */}
        <div className="box">
          <p className="box-head box2">Pro Plan</p>
          <p id="p">Perfect for scaling your video advertising campaigns</p>
          <div className="price">
            <h1>$497</h1>
            <span>/Month</span>
          </div>
          <p id="p" className="p-marg">$19.88 per video</p>
          <p className="p">
            <Image src="/assets/check.svg" alt="Checkmark" width={24} height={24} style={{ marginRight: '8px' }}/> 25 Videos per month
          </p>
          <button className="Downgrade-txt">Downgrade Subscription</button>
        </div>

        {/* Pro Plan */}
        <div className="box box-sub">
          <p className="box-head">Premium plan</p>
          <p className="p-pro p-pro2">Ideal for high-volume marketers and agencies</p>
          <div className="price">
            <h1 className="select">$997</h1>
            <span>/Month</span>
          </div>
          <p className="p-pro p-pro2" style={{ color: 'white', marginTop: '-18px' }}>
            $16.61 per video
          </p>
          <p className="p-pro p-pro2">
            <Image src="/assets/images/white-check.svg" alt="White Checkmark" width={24} height={24} style={{ marginRight: '8px' }}/> 50 Videos per month
          </p>
          <button id="up">Cancel Subscription</button>
        </div>
      </div>
      {/* Subscription Plans Section End */}
    </div>
    </>
  );
};

export default LoginPage;