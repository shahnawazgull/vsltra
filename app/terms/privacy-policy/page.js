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
                <h1 className='terms-h1'>Privacy Policy for VSLTranslator.io</h1>

                <h3 className='terms-h3'>1. Introduction</h3>
                <p className='terms-p'>
                    VSLTranslator.io is committed to protecting your privacy. This Privacy Policy explains our data collection practices and your rights regarding your information.
                </p>

                <h3 className='terms-h3'>2. Data Collection</h3>
                <p className='terms-p'>
                    <strong>Account Information:</strong> We collect information such as name, email, and payment details during account creation.
                </p>
                <p className='terms-p'>
                    <strong>Usage Data:</strong> We gather data on interactions with the platform, including IP addresses, cookies, and device details.
                </p>
                <p className='terms-p'>
                    <strong>Payment Information:</strong> Payments are securely processed through third-party providers, and payment details are not stored on our servers.
                </p>

                <h3 className='terms-h3'>3. Data Storage and Processing</h3>
                <p className='terms-p'>
                    Data is securely stored on cloud servers, with processing handled according to industry standards. Access to your data is limited to authorized personnel only.
                </p>

                <h3 className='terms-h3'>4. Use of Collected Data</h3>
                <p className='terms-p'>
                    We use the data we collect for the following purposes:
                </p>
                <ul className='terms-ul'>
                    <li><strong>Service Enhancement:</strong> To personalize your experience and improve platform functionality.</li>
                    <li><strong>Customer Support:</strong> To assist with issues and respond to inquiries.</li>
                    <li><strong>Marketing:</strong> We may send occasional promotional content, which you can opt out of at any time by contacting us.</li>
                </ul>

                <h3 className='terms-h3'>5. User Rights</h3>
                <p className='terms-p'>
                    You have the following rights regarding your data:
                </p>
                <ul className='terms-ul'>
                    <li><strong>Access:</strong> Users have the right to request access to their data.</li>
                    <li><strong>Modification:</strong> You may update or correct your information.</li>
                    <li><strong>Deletion:</strong> Users can request data deletion, subject to legal retention requirements.</li>
                </ul>
                <p className='terms-p'>
                    To exercise these rights, please contact support@VSLTranslator.io.
                </p>

                <h3 className='terms-h3'>6. Cookie Policy</h3>
                <p className='terms-p'>
                    Cookies are used to improve service functionality. You may control cookies through your browser settings.
                </p>

                <h3 className='terms-h3'>7. Data Security Measures</h3>
                <p className='terms-p'>
                    We use industry-standard encryption and protocols to protect user data.
                </p>

                <h3 className='terms-h3'>8. Changes to Privacy Policy</h3>
                <p className='terms-p'>
                    We may update this policy as needed, with significant changes communicated to users.
                </p>
            </div>
            <Footer/>
        </div>
    )
}

export default page
