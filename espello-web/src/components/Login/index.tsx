import React, { useState } from 'react';
import Header from "../Header";
import './index.css';
import { CredentialResponse, GoogleLogin, GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
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
                    {/* <div className="user-login-container-inner-left-content-fields">
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
                    <div className="user-login-container-inner-left-content-or">OR</div> */}
                    <div className="user-login-container-inner-left-content-secondary-buttons">
                        <GoogleOAuthProvider clientId="237607592442-qeh39j2ubfo9o6nc4mu8dd61a7tk57qq.apps.googleusercontent.com">
                            <GoogleComponent />
                        </GoogleOAuthProvider>
                        {/* <div className="user-login-container-inner-left-content-secondary-buttons-linkedin">Linkedin</div> */}
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
                    <div className="user-login-container-inner-left-content-primary-button">Create account</div>
                </div>
            </div>
            <div className="user-login-container-inner-right"></div>
        </div>
    </div>)
}
const GoogleComponent = () => {

    const handleSuccessResponse = async (response : CredentialResponse) => {
        // Handle successful authentication response
        const token = response.credential;
        try {
          const res = await fetch(SERVICE_URL_PYTHON+'/verify_google_token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `credential=${token}`
          });
          // Handle the response from your server
          console.log(await res.json());
        } catch (error) {
          console.error('Error verifying token:', error);
        }
      };
    
      const handleErrorResponse = () => {
        // Handle authentication error
        console.error('Error during Google authentication:');
      };
    

    return (
        // <div className="user-login-container-inner-left-content-secondary-buttons-google">
        <GoogleLogin
            onSuccess={handleSuccessResponse}
            onError={handleErrorResponse}
            width={320}
      />
    //   </div>
    );
};

export default Account;

