import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { SERVICE_URL_PYTHON } from "../../util/AppConstants";
import { jwtDecode } from "jwt-decode";
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

            const result = await res.json();

            if (res.status == 0 || res.ok) {

                login({
                    user: jwtDecode(token),
                    user_id: result.user_id
                })

                // Navigate to the homepage
                navigate('/session/create-session');
            }
            else {
                console.error('Error login in loggin from google');
                alert('Ahh, you’re interested. Please join the waitlist as we are operating in a closed user group')
                navigate('/');
            }

            // Handle the response from your server
        } catch (error) {
            console.error('Error verifying token:', error);
            navigate('/');
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