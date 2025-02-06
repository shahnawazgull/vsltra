"use client"
import React, { useEffect, useState, useContext } from 'react';
import Button from '../global/Button'; // Assuming Button is a reusable component
import { formatterUSD } from '/components/utils/helper';
import cn from '/components/utils/cn';
import { useRouter } from 'next/router'; // Next.js router for navigation
import { UserContext } from '../../components/context/UserContext';
// import request from '../../apis'; // Assuming this is a utility for fetching data

const redirectToStripe = (url) => {
  window.location.href = url; // Handle Stripe redirect via window.location (still valid)
};

const PlanCard = () => {
  const [plans, setPlans] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [currentPlanIdx, setCurrentPlanIdx] = useState(-1);
  const router = useRouter(); // Use Next.js router for navigation

  useEffect(() => {
    if (userInfo && plans.length > 0) {
      const newPlanIdx = plans.findIndex(
        (p) => p.metadata.nickname === userInfo.plan
      );
      setCurrentPlanIdx(newPlanIdx);
    }
  }, [userInfo?.plan, plans]);

  const getButtonText = (planIndex) => {
    if (!userInfo || currentPlanIdx === -1) return 'Subscribe';

    if (planIndex === currentPlanIdx) return 'Cancel Subscription';

    return planIndex < currentPlanIdx ? 'Downgrade Subscription' : 'Upgrade Subscription';
  };

  const updateUserAndPlans = async () => {
    try {
      const plansResponse = await request.getSubscriptionPlans();
      const filteredPlans = plansResponse.data
        .filter((plan) => plan.active === true)
        .sort((a, b) => a.default_price.unit_amount - b.default_price.unit_amount);
      setPlans(filteredPlans);

      const userResponse = await request.getUserInfo();
      setUserInfo(userResponse.data);
    } catch (error) {
      console.error('Error updating user and plans:', error);
    }
  };

  useEffect(() => {
    updateUserAndPlans();
  }, []);

  const handleSubscription = async (plan, index) => {
    if (isClicked) return;
    setIsClicked(true);

    try {
      if (index === currentPlanIdx) {
        // Cancel Subscription
        await request.cancelSubscription();
        await updateUserAndPlans();
        router.reload(); // Reload page using Next.js router
      } else if (currentPlanIdx !== -1) {
        // Update Subscription
        const response = await (index < currentPlanIdx
          ? request.downgradeSubscription(plan.default_price.id)
          : request.upgradeSubscription(plan.default_price.id));

        if (response.data.redirect) {
          redirectToStripe(response.data.redirect);
        } else {
          await updateUserAndPlans();
          router.reload(); // Reload page using Next.js router
        }
      } else {
        // New Subscription
        const response = await request.subscribeLogged(plan.id);
        if (response.data.redirect) {
          redirectToStripe(response.data.redirect);
        } else {
          await updateUserAndPlans();
          router.reload(); // Reload page using Next.js router
        }
      }
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setIsClicked(false);
    }
  };

  return (
    <div className='flex gap-2 justify-around'>
      {plans.map((plan, index) => {
        const buttonText = getButtonText(index);
        const isCurrentPlan = index === currentPlanIdx;

        return (
          <div
            key={index}
            className={`plan-crd ${isCurrentPlan ? 'premium-crd' : ''}  min-w-[300px]`}
          >
            <h2 className='title min-h-[50px] capitalize h-[80px]'>{plan.metadata.nickname}</h2>
            <p className='desc h-[80px]'>{plan.description}</p>
            <div className='price'>
              <div>
                <strong>${(plan.default_price.unit_amount / 100).toFixed(2)}</strong>
                <span> / month</span>
              </div>
              <p className='per-amount'>
                ${(plan.default_price.unit_amount / 100 / plan.metadata.credits).toFixed(2)} per video
              </p>
              <ul className='checklist h-[30px]'>
                <li>{plan.metadata.credits} Videos per month</li>
              </ul>
            </div>
            <button
              className={`btns text-center min-h-[60px] ${isCurrentPlan ? 'bg-gray-400' : ''}`}
              onClick={() => handleSubscription(plan, index)}
              disabled={isClicked}
            >
              {buttonText}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PlanCard;
