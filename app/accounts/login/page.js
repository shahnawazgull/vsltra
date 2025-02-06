'use client'; // Ensure that this component is run on the client side

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation instead of next/router in App Router
import { toast } from 'react-toastify';
import Link from 'next/link';
import Cookies from 'js-cookie'; // Use js-cookie for cookies in Next.js
import Image from 'next/image'; // Import Next.js Image component for optimization
import InputPassword from '/components/global/Input/Password';
import InputText from '/components/global/Input/Text';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/public/assets/css/style.css';
import '/public/assets/css/global.css'
import '/public/assets/css/responsive.css'


const Login = () => {
    const router = useRouter(); // Use useRouter from 'next/navigation' for App Router
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error('Please fill in both fields');
            return;
        }

        try {
            // Simulating a successful login
            Cookies.set('access_token', 'dummy_token'); // Set dummy token in cookies
            toast.success('Login Successfully');
            router.push('/voice'); // Navigate to a new route after successful login
        } catch (error) {
            toast.error('An error occurred during login');
            Cookies.remove('access_token'); // Remove the token on error
        }
    };

    return (
        <section className="login-sec att-log-bg">
            <div className="login-container">
                <div className="vsl-logo text-center">
                    <Link href="/">
                        {/* Using Next.js Image component for better image optimization */}
                        <Image src="/assets/images/vsl-logo.svg" alt="Logo" width={270} height={50} />
                    </Link>
                </div>
                <h5 className="login-title text-center">Sign in</h5>
                <form className="form-block" onSubmit={handleSubmit}>
                    <div className="custom-margin">
                        <InputText
                            type="email"
                            label="Email Address:"
                            name="email"
                            inputFor="exampleInputEmail1"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="custom-margin">
                        <InputPassword
                            label="Password:"
                            placeholder="Password"
                            inputFor="exampleInputPassword"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Link href="/accounts/reset-password" className="forget-login">
                            Forgot password?
                        </Link>
                    </div>
                    <Link href='/voice-and-subtitle/' className='btns admin-btns'>
                        Sign in
                    </Link>
                </form>
            </div>
        </section>
    );
};

export default Login;
