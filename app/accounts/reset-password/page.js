'use client'; // Ensure that this component is run on the client side

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation instead of next/router in App Router
import { toast } from 'react-toastify';
import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component for optimization
import InputText from '/components/global/Input/Text';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/public/assets/css/style.css';
import '/public/assets/css/global.css';
import '/public/assets/css/responsive.css';

const ResetPassword = () => {
  const router = useRouter(); // Use useRouter from 'next/navigation' for App Router
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate the password reset process
      // Normally, you'd make an API call here
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate loading

      toast.success('Password reset instructions sent to your email');
      router.push('/accounts/login'); // Redirect to login after successful reset request
    } catch (error) {
      toast.error('An error occurred while requesting password reset');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="reset-password-sec att-log-bg">
      <div className="reset-container">
        <div className="vsl-logo text-center">
          <Link href="/">
            <Image src="/assets/images/vsl-logo.svg" alt="Logo" width={270} height={50} />
          </Link>
        </div>
        <h5 className="reset-title text-center">Reset Your Password</h5>
        <form className="form-block" onSubmit={handleSubmit}>
          <div className="custom-margin">
            <InputText
              type="email"
              label="Email Address:"
              name="email"
              inputFor="exampleInputEmail1"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btns admin-btns" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </div>
        </form>
        <div className="text-center mt-3">
          <Link href="/accounts/login" className="back-to-login-link">
            Back to Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
