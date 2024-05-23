import React, { useState } from 'react';
import Header from "../Header";
import './index.css';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import { SERVICE_URL_PYTHON } from '../../util/AppConstants';



const Account = () => {

    const [showLogin, setShowLogin] = useState(true);

    const toggleForm = () => {
        setShowLogin(prevState => !prevState);
    };

    return (
        <>
            <Header scrollToCompnent={() => { }} enableOtherButtons={false} />
            {showLogin ? <Login onCreateAccountClick={toggleForm} /> : <Register onLoginClick={toggleForm} />}
        </>
    );
}

interface LoginProps {
    onCreateAccountClick: () => void;
}

const Login: React.FC<LoginProps> = ({ onCreateAccountClick }) => {
    return (<div className="user-login-container">
        <div className="user-login-container-inner">
            <div className="user-login-container-inner-left">
                <div className="user-login-container-inner-left-content">
                    <div className="user-login-container-inner-left-content-heading">
                        <div className="user-login-container-inner-left-content-heading1">Login to Espello!</div>
                        <div className="user-login-container-inner-left-content-heading2">
                            <div className="user-login-container-inner-left-content-heading2-1">Not yet with us?</div>
                            <div className="user-login-container-inner-left-content-heading2-2" onClick={onCreateAccountClick}>Create account with email</div>
                        </div>
                    </div>
                    <div className="user-login-container-inner-left-content-fields">
                        <div className="user-login-container-inner-left-content-fields-email">
                            <div className="user-login-container-inner-left-content-fields-email-input">
                                <input className="user-login-container-inner-left-content-fields-email-input-content" placeholder="email"></input>
                            </div>
                        </div>
                        <div className="user-login-container-inner-left-content-fields-password">
                            <div className="user-login-container-inner-left-content-fields-password-input">
                                <input className="user-login-container-inner-left-content-fields-password-input-content" placeholder="password"></input>
                            </div>
                        </div>
                    </div>
                    <div className="user-login-container-inner-left-content-primary-button">Login</div>
                    <div className="user-login-container-inner-left-content-or">OR</div>
                    <div className="user-login-container-inner-left-content-secondary-buttons">
                        <GoogleOAuthProvider clientId="801004123541-36191n2fjoahivhmoa4fmapddhv0uh2k.apps.googleusercontent.com">
                            <GoogleComponent />
                        </GoogleOAuthProvider>
                        <div className="user-login-container-inner-left-content-secondary-buttons-linkedin">Linkedin</div>
                    </div>
                </div>
            </div>
            <div className="user-login-container-inner-right"></div>
        </div>
    </div>)
}

interface RegisterProps {
    onLoginClick: () => void;
}

const Register: React.FC<RegisterProps> = ({ onLoginClick }) => {
    return (<div className="user-login-container">
        <div className="user-login-container-inner">
            <div className="user-login-container-inner-left">
                <div className="user-login-container-inner-left-content">
                    <div className="user-login-container-inner-left-content-heading">
                        <div className="user-login-container-inner-left-content-heading1">Create account with email</div>
                        <div className="user-login-container-inner-left-content-heading2">
                            <div className="user-login-container-inner-left-content-heading2-2" onClick={onLoginClick}>Already have an account? Log in</div>
                        </div>
                    </div>
                    <div className="user-login-container-inner-left-content-fields">
                        <div className="user-login-container-inner-left-content-fields-email">
                            <div className="user-login-container-inner-left-content-fields-email-input">
                                <input className="user-login-container-inner-left-content-fields-email-input-content" placeholder="email"></input>
                            </div>
                        </div>
                        <div className="user-login-container-inner-left-content-fields-otp">
                            <div className="user-login-container-inner-left-content-fields-otp-input">
                                <input className="user-login-container-inner-left-content-fields-otp-input-content" placeholder="enter OTP sent on email"></input>
                            </div>
                        </div>
                        <div className="user-login-container-inner-left-content-fields-password">
                            <div className="user-login-container-inner-left-content-fields-password-input">
                                <input className="user-login-container-inner-left-content-fields-password-input-content" placeholder="password"></input>
                            </div>
                        </div>
                        <div className="user-login-container-inner-left-content-fields-password">
                            <div className="user-login-container-inner-left-content-fields-password-input">
                                <input className="user-login-container-inner-left-content-fields-password-input-content" placeholder="confirm password"></input>
                            </div>
                        </div>
                    </div>
                    <div className="user-login-container-inner-left-content-primary-button">Login</div>
                </div>
            </div>
            <div className="user-login-container-inner-right"></div>
        </div>
    </div>)
}
const GoogleComponent = () => {

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            const credential = (tokenResponse as any).credential;

            if (!credential) {
                console.error('Credential is undefined');
                return;
            }

            try {
                const result = await fetch(`${SERVICE_URL_PYTHON}/verify_google_token`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: new URLSearchParams({
                        credential: credential  // Use 'credential' to match your Python code
                    }).toString(),
                });

                if (!result.ok) {
                    throw new Error(`HTTP error! Status: ${result.status}`);
                }

                const data = await result.json();
                console.log('Backend response:', data);
            } catch (error) {
                console.error('Error:', error);
            }
        },
        onError: (errorResponse) => {
            console.error('Login failed:', errorResponse);
        },
    });

    return (
        <div className="user-login-container-inner-left-content-secondary-buttons-google" onClick={() => googleLogin()}>Google</div>
    );
};

export default Account;

