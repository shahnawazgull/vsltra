import Image from "next/image";
import '/public/tailwind.css';
import Link from "next/link";
import logo from '/public/assets/images/logo.svg';

export default function ConfirmationEmail() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6 text-left">
        <div className="flex justify-center mb-4">
        <Link className="navbar-brand" href="/">
                                    <Image src="/assets/images/vsl-logo.svg" alt="Logo" width={250} height={50} />
            
          </Link>
        </div>
        <h2 className="text-xl font-bold text-gray-900 text-center">Account Confirmation Email</h2>
        <p className="text-gray-900 mt-2">Hi <span className="font-medium">username</span>,</p>
        <p className="text-gray-900 mt-2">
          Welcome to VSLTranslator.io! Your account is live, and you’re ready to
          translate VSLs into new languages and unlock global markets.
        </p>
        <h3 className="text-lg font-semibold mt-4 text-gray-900 text-center">What’s Next?</h3>
        <ul className="text-gray-900 mt-2 space-y-2">
          <li>
            <span className="font-semibold">1. Log in:</span> Login to <a href="#" className="text-gray-900 underline">VSLTranslator.io</a>
          </li>
          <li>
            <span className="font-semibold">2. Start Translating:</span> Upload your VSL and translations.
          </li>
          <li>
            <span className="font-semibold">3. Need Support?</span> Contact us at
            <Link href="mailto:support@vsltranslator.io" className="text-gray-900 underline"> support@vsltranslator.io</Link>.
          </li>
        </ul>
        <p className="text-gray-900 mt-4">Let’s grow your business globally!</p>
        <p className="text-gray-900 font-medium mt-2">Best regards,</p>
        <p className="text-gray-900">The VSLTranslator.io Team</p>
        <div className="flex justify-center mt-4">
          <Link href='/accounts/login'><button className="bg-black text-white font-medium px-6 py-2 rounded-md hover:bg-gray-800">
            Login Now
          </button></Link>
        </div>
      </div>
    </div>
  );
}