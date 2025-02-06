"use client";
// components/Plans/Plans.js
import { useState } from 'react';
import clsx from 'clsx';
import Button from '@/components/global/Button';
import Image from 'next/image';
import Link from 'next/link';
import whiteArrow from '/public/assets/images/btn-arrow.svg';
import organgeArrow from '/public/assets/images/arrow-orange.svg';

const Plans = () => {
  const [data] = useState([
    {
      id: 1,
      name: 'Pro Plan',
      default_price: { unit_amount: 49700 }, // $497.00
      description: '$19.88 per video',
      metadata: { credits: '25 Videos per month' },
    },
    {
      id: 2,
      name: 'Premium Plan',
      default_price: { unit_amount: 99700 }, // $997.00
      description: '$16.61 per video',
      metadata: { credits: '50 Videos per month' },
    },
    {
      id: 3,
      name: 'Free Trial Plan',
      default_price: { unit_amount: 0 }, // Free
      description: 'Learn How VidTranslator.io Works',
      metadata: { credits: '1 credit' },
    },
  ]);

  return (
    <section className='plan-sec' id='pricing'>
      <div className='container'>
        <h2 className='plan-title text-left font-weight'>
          Choose The Plan That Fits <br /> Your Needs
        </h2>
        <div className='for-flex gap-4'>
          {data
            .sort((a, b) => a.default_price.unit_amount - b.default_price.unit_amount)
            .map((item, index) => (
              <div
                key={item.id}
                className={clsx('plan-crd', 'min-w-[300px]', index === 1 && 'premium-crd')}
                style={{ backgroundColor: index === 1 ? '#FF7B24' : 'inherit' }} // Highlight selected card
              >
                <h2 style={{ color: index === 1 ? '#E3E3E3' : '#8E8E8E' }}>
                  {item.name}
                  {index === 1 && <span className='premium-tag'>Most popular</span>}
                </h2>
                <div className='price'>
                  {item.default_price.unit_amount === 0 ? (
                    <strong>Free</strong>
                  ) : (
                    <strong>
                      ${Math.floor(item.default_price.unit_amount / 100)}
                      <span style={{ fontSize: '16px', color: index === 1 ? 'CED7DE' : '#CED7DE', marginLeft: '4px' }}>/month</span>
                    </strong>
                  )}
                </div>
                <p className='desc'>{item.description}</p>
                <ul className='checklist'>
                  {item.metadata && item.metadata.credits && (
                    <li>{item.metadata.credits}</li>
                  )}
                </ul>
                <Link href='/accounts/signup' className='block'>
                  <button className="btns">
                    Get Started
                    <Image className="white" src={whiteArrow} alt="arrow" />
                    <Image className="orange" src={organgeArrow} alt="arrow" />
                  </button>
                </Link>
              </div>
            ))}
        </div>
        <div className='all-plans'>
          <h3 className='fontweightsm'>All Plans Include</h3>
          <ul className='checklist '>
            <li>Ability to upload your own video clips and assets</li>
            <li>Customizable background music and timing</li>
            <li>Fast, easy, and intuitive interface</li>
            <li>No video editing skills required</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Plans;
