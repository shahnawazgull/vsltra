import 'bootstrap/dist/css/bootstrap.min.css'; 
import "/public/assets/css/extra.module.css"; 
import "/public/assets/css/style.css"; 
import '/public/assets/css/terms.css';

import Footer from '@/components/Footer/Footer2';
import Header from '@/components/Header/Header2';

const page = () => {
    return (
        <div className='parent-con'>
            <Header/>
            <div className="terms-content">
                <h1 className='terms-h1'>Refund Policy for VSLTranslator.io</h1>

                <h3 className='terms-h3'>1. Overview</h3>
                <p className='terms-p'>
                    VSLTranslator.io is committed to customer satisfaction. This Refund Policy outlines the terms under which refunds are available.
                </p>

                <h3 className='terms-h3'>2. Eligibility for Refunds</h3>
                <p className='terms-p'>
                    To qualify for a refund, customers must request it within 3 days of the subscription start date. Additionally, accounts that have used 2 or more credits are ineligible for refunds.
                </p>

                <h3 className='terms-h3'>3. Refund Process</h3>
                <p className='terms-p'>
                    <strong>Request Submission:</strong> Contact <a href="mailto:support@VSLTranslator.io">support@VSLTranslator.io</a> to request a refund.
                </p>
                <p className='terms-p'>
                    <strong>Processing Time:</strong> Refund requests will be reviewed and processed within 7 business days, with refunds issued to the original payment method.
                </p>

                <h3 className='terms-h3'>4. Limitations</h3>
                <p className='terms-p'>
                    Refunds are not available for accounts that have used 2 or more credits or for users who have misused the platform.
                </p>

                <h3 className='terms-h3'>5. Contact Us</h3>
                <p className='terms-p'>
                    For questions regarding our Refund Policy, please reach out to us through our website’s contact form or by emailing <a href="mailto:support@VSLTranslator.io">support@VSLTranslator.io</a>.
                </p>
            </div>
            <Footer/>
        </div>
    )
}

export default page
