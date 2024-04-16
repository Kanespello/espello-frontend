import React from 'react';
import {useNavigate} from 'react-router-dom';
import './header.css';

function Header() {

    const navigate = useNavigate();

    const onClickLoginButton = () => {
        navigate('/Login');
    };

    const onClickLogo = () => {
        navigate('/');
    };

    return (<div className="header">
        <div className="header-left">
            <div className="header-left-logo" onClick={onClickLogo}>Espello.ai</div>
        </div>
        <div className="header-right">
            <div className="header-right-buttons" onClick={onClickLoginButton}>
                <div className="header-right-buttons-login">Login</div>
            </div>
        </div>
    </div>);
}

export default Header;
