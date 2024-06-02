import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleComponent from "./GoogleComponent";
import { GOOGLE_CLIENT_ID } from "../../util/AppConstants";

const Login = () => {
    return (<div className="user-login-container">
        <div className="user-login-container-inner">
            <div className="user-login-container-inner-left">
                <div className="user-login-container-inner-left-content">
                    <div className="user-login-container-inner-left-content-heading">
                        <div className="user-login-container-inner-left-content-heading1">Login to Espello!</div>
                    </div>
                    <div className="user-login-container-inner-left-content-secondary-buttons">
                        <GoogleOAuthProvider clientId={`${GOOGLE_CLIENT_ID}`}>
                            <GoogleComponent />
                        </GoogleOAuthProvider>
                    </div>
                </div>
            </div>
            <div className="user-login-container-inner-right"></div>
        </div>
    </div>)
}

export default Login