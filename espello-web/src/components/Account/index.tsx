import React, { useState } from 'react';
import Header from "../Header";
import './index.css';
import Register from './Register';
import Login from './Login';
import { useAuth } from './AuthContext';

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

export default Account;

