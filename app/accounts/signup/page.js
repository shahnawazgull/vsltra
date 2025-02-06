"use client"; // Ensure this component is treated as a client-side component

import { useState, useContext } from "react";
import { useRouter } from "next/navigation"; // Use Next.js router
import { toast } from "react-toastify"; // For displaying toast messages
import Image from "next/image"; // For optimized image rendering
import Link from "next/link"; // For internal navigation

import InputPassword from "/components/global/Input/Password";
import InputText from "/components/global/Input/Text";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import "/public/assets/css/style.css"; // Custom styles
import "/public/assets/css/global.css"; // Global styles
import "/public/tailwind.css"; // Tailwind (if you're using it)

import { ColorContext } from "/components/context/color-context"; // Your color context

const SignUp = () => {
  const router = useRouter(); // To navigate programmatically
  const { fontSz } = useContext(ColorContext); // Access the font size from context

  const [nextPath, setNextPath] = useState("/"); // Default redirect path after form submission

  const handleSubmit = (e) => {
    e.preventDefault();
    const formElements = e.target.elements;

    // Simple frontend validation for matching passwords
    if (formElements.password.value !== formElements.confirmPassword.value) {
      toast.error("Passwords do not match");
      return;
    }

    const payload = {
      email: formElements.email.value,
      password: formElements.password.value,
      firstName: formElements.firstName.value,
      lastName: formElements.lastName.value,
    };

    // Simulate successful signup (no backend request)
    toast.success("Successfully Signed Up!");

    // Redirect to the next page or the homepage
    router.push(nextPath); // Redirect to home or default path
  };

  return (
    <section className="login-sec att-log-bg" style={{ fontSize: `${fontSz}px` }}>
      {/* Section for SignUp */}
      <div className="bg-white p-10 w-[400px] mx-auto">
        <div className="vsl-logo text-center">
          <Link href="/">
            <Image
              src="/assets/images/vsl-logo.svg"
              alt="Logo"
              width={270}
              height={50}
            />
          </Link>
        </div>

        <h5 className="login-title text-center mt-3">Sign up</h5>
        <h5 className="text-center text-2xl text-zinc-500 font-semibold forwidth">
          Set Your Email And Password<br/> For Your Account Below
        </h5>

        <form className="form-block" onSubmit={handleSubmit}>
          {/* First Name Input */}
          <div className="custom-margin">
            <InputText
              type="text"
              label="First Name:"
              name="firstName"
              inputFor="firstName"
              placeholder="First Name"
              required
            />
          </div>

          {/* Last Name Input */}
          <div className="custom-margin">
            <InputText
              type="text"
              label="Last Name:"
              name="lastName"
              inputFor="lastName"
              placeholder="Last Name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="custom-margin">
            <InputText
              type="email"
              label="Email Address:"
              name="email"
              inputFor="email"
              placeholder="Email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="custom-margin">
            <InputPassword
              label="Password:"
              placeholder="Password"
              inputFor="password"
              name="password"
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div className="custom-margin">
            <InputPassword
              label="Confirm Password:"
              placeholder="Confirm Password"
              inputFor="confirmPassword"
              name="confirmPassword"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btns admin-btns w-full py-2">
            Sign up
          </button>

          {/* Sign-in Link */}
          <div className="text-center mt-3">
            <p className="forget-login">
              Already have an account?{" "}
              <Link href="/accounts/login" className="text-blue-600">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
