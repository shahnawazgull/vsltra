import HeaderAdmin from '/components/Header/HeaderAdmin';
import React from 'react'
import '/public/assets/css/terms.css'
import Footer from '/components/Footer/Footer2';
const page = () => {
    return (
        <>
        <HeaderAdmin />
        <div className='parent-con'>
            <div className="terms-content">
                <h1 className='terms-h1 terms-h1ex'>Affiliate Program Terms for VSLTranslator.io</h1>

                <h3 className='terms-h3'>1. Introduction</h3>
                <p className='terms-p'>
                    The VSLTranslator.io Affiliate Program enables you to earn a 30% recurring commission on customer subscriptions generated through your unique referral link.
                </p>

                <h3 className='terms-h3'>2. Eligibility and Enrollment</h3>
                <p className='terms-p'>
                    Affiliates must complete an application and agree to these terms. Membership in the affiliate program is at the discretion of VSLTranslator.io and may be revoked for violations of these terms.
                </p>

                <h3 className='terms-h3'>3. Commission Structure</h3>
                <p className='terms-p'>
                    <strong>Payout Rate:</strong> Affiliates earn a 30% commission on recurring customer payments.
                </p>
                <p className='terms-p'>
                    <strong>Payout Schedule:</strong> Commissions are paid monthly, provided a minimum payout threshold is reached.
                </p>

                <h3 className='terms-h3'>4. Affiliate Responsibilities</h3>
                <p className='terms-p'>
                    Affiliates agree to promote VSLTranslator.io responsibly, following ethical guidelines, and avoiding misleading claims or unauthorized branding use.
                </p>

                <h3 className='terms-h3'>5. Termination of Affiliate Status</h3>
                <p className='terms-p'>
                    Affiliates may be removed from the program for violating these terms or misusing affiliate marketing guidelines. Upon termination, no further commissions will be earned.
                </p>

                <h3 className='terms-h3'>6. Contact Us</h3>
                <p className='terms-p'>
                    For any further questions or information regarding the affiliate program, please contact us via the form on our website.
                </p>
            </div>
        </div>
        {/* <Footer/> */}
        </>
            
    )
}

export default page
