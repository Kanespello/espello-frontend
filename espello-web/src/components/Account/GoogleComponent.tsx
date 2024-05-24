import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { SERVICE_URL_PYTHON, SESSION_SECRET_KEY, USER_SESSION_KEY } from "../../util/AppConstants";
import { jwtDecode } from "jwt-decode";
import CryptoJS from 'crypto-js';
import { useAuth } from "./AuthContext";

const GoogleComponent = () => {

    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSuccessResponse = async (response: CredentialResponse) => {

        const token = response.credential as string;
        try {
            const res = await fetch(SERVICE_URL_PYTHON + '/verify_google_token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `credential=${token}`,
                redirect: 'manual'
            });

            if (res.status == 0 || res.ok) {
               // Decode the token to get user information
               const user = jwtDecode(token);
            
               // Encrypt user information
               const userEncrypted = CryptoJS.AES.encrypt(JSON.stringify(user), SESSION_SECRET_KEY as string).toString();

               // Store encrypted user information in local storage
               localStorage.setItem(USER_SESSION_KEY as string, userEncrypted);

               //update User
               login(user)

               // Navigate to the homepage
               navigate('/');
            }
            else {
                console.error('Error login in loggin from google');
            }

            // Handle the response from your server
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

export default GoogleComponent