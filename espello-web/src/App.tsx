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
import React, { useEffect } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { SERVICE_URL_PYTHON } from './util/AppConstants';

const App = () => {
    const handleLoginSuccess = async (response : any) => {
        const { credential } = response;
        try {
            // Send the token to the backend
            const result = await axios.post(SERVICE_URL_PYTHON+'/verify_google_token', {
                token: credential,
            });
            console.log('Backend response:', result.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleLoginFailure = () => {
        console.error('Login failed:');
    };

    return (
        <GoogleOAuthProvider clientId="801004123541-36191n2fjoahivhmoa4fmapddhv0uh2k.apps.googleusercontent.com">
                <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onError={handleLoginFailure}
                />
        </GoogleOAuthProvider>
    );
};

export default App;

