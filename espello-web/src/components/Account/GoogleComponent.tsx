import React from 'react';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { SERVICE_URL_PYTHON } from '../../util/AppConstants';
import { jwtDecode, JwtPayload } from 'jwt-decode'; // Import JwtPayload from jwt-decode
import { useAuth } from './AuthContext';

// Define interface for login parameters
export interface LoginParams {
    user: JwtPayload;
    user_id: string;
}

const GoogleComponent = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    // Handle successful response from Google authentication
    const handleSuccessResponse = async (response: CredentialResponse) => {
        const token = response.credential as string;
        try {
            const res = await fetch(`${SERVICE_URL_PYTHON}/verify_google_token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `credential=${token}`,
                redirect: 'manual'
            });

            if (res.ok) {
                const result = await res.json();
                if (result && result.user_id) {
                    // Decode the JWT token and login user
                    const loginParams: LoginParams = {
                        user: jwtDecode(token) as JwtPayload,
                        user_id: result.user_id
                    };
                    login(loginParams);
                    // Navigate to the homepage
                    navigate('/session/create-session');
                } else {
                    console.error('User ID not found in the response');
                    // Alert user and redirect to homepage
                    alert('Ahh, you’re interested. Please join the waitlist as we are operating in a closed user group');
                    navigate('/');
                }
            } else {
                console.error('Error logging in from Google');
                // Alert user and redirect to homepage
                alert('Ahh, you’re interested. Please join the waitlist as we are operating in a closed user group');
                navigate('/');
            }
        } catch (error) {
            console.error('Error verifying token:', error);
            // Redirect to homepage on error
            navigate('/');
        }
    };

    // Handle error response from Google authentication
    const handleErrorResponse = () => {
        console.error('Error during Google authentication');
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

export default GoogleComponent;