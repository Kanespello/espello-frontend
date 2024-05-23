// import React, { useState } from 'react';
// import './App.css';

// import "@fontsource/raleway"; // Defaults to weight 400
// import "@fontsource/raleway/700.css"; // Specify weight
// import "@fontsource/raleway/700-italic.css"; // Specify weight and style
// import "@fontsource/raleway/800.css"; // Specify weight
// import "@fontsource/raleway/800-italic.css"; // Specify weight and style
// import "@fontsource/raleway/900.css"; // Specify weight
// import "@fontsource/raleway/900-italic.css"; // Specify weight and style
// import "@fontsource/exo-2"; // Defaults to weight 400
// import "@fontsource/exo-2/700.css"; // Specify weight
// import "@fontsource/exo-2/700-italic.css"; // Specify weight and style
// import "@fontsource/exo-2/800.css"; // Specify weight
// import "@fontsource/exo-2/800-italic.css"; // Specify weight and style
// import "@fontsource/exo-2/900.css"; // Specify weight
// import "@fontsource/exo-2/900-italic.css";
// import UserInteract from "./components/UserIntract";
// import {BrowserRouter, Route, Routes} from "react-router-dom";
// import NotFound from "./components/NotFound";
// import Home from './components/Home';
// import UserWaitlist from './components/UserWaitlist';
// import Account from './components/Login';

// function App() {
    
//     return (<div className="container">
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Home/>}/>
//                 <Route path="/userInteract" element={<UserInteract/>}/>
//                 <Route path="/userWaitlist" element={<UserWaitlist/>}/>
//                 <Route path="/login" element={<Account/>}/>
//                 <Route path="/*" element={<NotFound/>}/>
//             </Routes>
//         </BrowserRouter>
//     </div>);
    
// }

// export default App;


import React from 'react';
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { SERVICE_URL_PYTHON } from './util/AppConstants';

const App = () => {
    const handleLoginSuccess = async (response : CredentialResponse) => {
        const { credential } = response;
        
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
    };
    const handleLoginFailure = () => {
        console.error('Login failed');
    };

    return (
        <GoogleOAuthProvider clientId="801004123541-36191n2fjoahivhmoa4fmapddhv0uh2k.apps.googleusercontent.com">
            <div className="App">
                <h1>Google OAuth2 Authentication</h1>
                <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onError={handleLoginFailure}
                />
            </div>
        </GoogleOAuthProvider>
    );
};

export default App;
