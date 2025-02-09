import 'bootstrap/dist/css/bootstrap.min.css'; 
import "/public/assets/css/extra.module.css"; 
import "/public/assets/css/style.css"; 
import '/public/assets/css/terms.css';

import Footer from '@/components/Footer/Footer2';
import Header2 from '@/components/Header/Header2';
const page = () => {
    return (
        <div className='parent-con'>
            <Header2/>
            <div className="terms-content">
                <h1 className='terms-h1'>Terms of Service for VSLTranslator.io</h1>
                <h3 className='terms-h3'>1. Introduction</h3>
                <p className='terms-p'>
                    Welcome to VSLTranslator.io, a platform operated by Crown18 Limited, designed to automate Video Sales Letter (VSL) translations, enabling businesses to expand into non-English-speaking markets. These Terms of Service ("Terms") govern your use of VSLTranslator.io, including all content, features, and functionality provided. By creating an account or accessing our platform, you agree to these Terms.
                </p>

                <h3 className='terms-h3'>2. Eligibility</h3>
                <p className='terms-p'>
                    You must be at least 18 years old and legally permitted to enter into agreements. By using VSLTranslator.io, you confirm that you meet these eligibility requirements.
                </p>

                <h3 className='terms-h3'>3. Account Registration and Access</h3>
                <p className='terms-p'>
                    To use the platform, you must create an account with accurate and complete information, including a valid email. You are responsible for keeping your login credentials secure and notifying us immediately at support@VSLTranslator.io if you suspect unauthorized access.
                </p>

                <h3 className='terms-h3'>4. Subscription Terms</h3>
                <p className='terms-p'>
                    VSLTranslator.io offers flexible subscription plans that renew automatically on a monthly basis. Subscription fees will be charged to your payment method unless canceled before the renewal date. You may upgrade or downgrade plans as needed, with changes taking effect in the following billing cycle.
                </p>

                <h3 className='terms-h3'>5. Refund Policy</h3>
                <p className='terms-p'>
                    Refunds are available under certain conditions. Customers may request a refund within the first 3 days of subscribing, provided they have not used more than one credit on their account. Please refer to our Refund Policy for detailed terms.
                </p>

                <h3 className='terms-h3'>6. User Conduct</h3>
                <p className="before-list-items terms-p">
                    Users agree not to misuse VSLTranslator.io in any way, including but not limited to:
                </p>

                <ul className='terms-ul'>
                    <li>Reselling or redistributing platform features.</li>
                    <li>Sharing login credentials or allowing unauthorized access.</li>
                    <li>Using the platform to create misleading, fraudulent, or illegal content.</li>
                </ul>

                <p className='terms-p'>
                    Violation of these rules may result in suspension or termination of your account.
                </p>

                <h3 className='terms-h3'>7. Limitation of Liability</h3>
                <p className='terms-p'>
                    VSLTranslator.io, its owners, and affiliates are not liable for any indirect, incidental, or consequential damages arising from the use of the platform, including data loss, service interruptions, or issues beyond our reasonable control.
                </p>

                <h3 className='terms-h3'>8. Intellectual Property</h3>
                <p className='terms-p'>
                    All content, trademarks, and technology on VSLTranslator.io are the property of Crown18 Limited. Users retain rights to the video content they upload, but any tools or templates provided remain the property of VSLTranslator.io.
                </p>

                <h3 className='terms-h3'>9. Termination</h3>
                <p className='terms-p'>
                    Accounts may be suspended or terminated for violating these Terms or for non-payment. Users may terminate their account at any time, but subscription fees already paid are non-refundable.
                </p>

                <h3 className='terms-h3'>10. Dispute Resolution</h3>
                <p className='terms-p'>
                    Any disputes will be resolved under the jurisdiction applicable to Crown18 Limited.
                </p>
            </div>
            <Footer/>
        </div>
    )
}

export default page
