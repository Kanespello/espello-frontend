import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleComponent from "./GoogleComponent";
import { GOOGLE_CLIENT_ID } from "../../util/AppConstants";

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
                        <GoogleOAuthProvider clientId={`${GOOGLE_CLIENT_ID}`}>
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

export default Login