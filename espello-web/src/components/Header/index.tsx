import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';

interface HeaderProps{
    scrollToCompnent : () => void
}

const Header : FC<HeaderProps> = ({scrollToCompnent}) => {

    const navigate = useNavigate();

    const onClickEnterprise = () => {
        scrollToCompnent();
    };

    const onClickLogo = () => {
        navigate('/');
    };

    return (<div className="header">
        <div className="header-left">
            <div className='header-left-logo-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.33566 14.4397C12.5028 14.7417 21.2514 15.5762 22.06 9.33501C23.0491 1.70008 16.1797 0 10.654 0C5.12826 0 -0.381223 1.82373 0.0207368 9.33501C0.244316 13.5129 2.21015 19.1989 9.4877 19.4919C13.3621 19.6479 19.3073 17.4978 19.3073 16.8545C19.3073 15.8235 18.3294 15.899 16.5353 16.0375C15.3415 16.1297 13.7863 16.2497 11.9174 16.0903C9.96003 15.9233 8.19948 14.7871 8.19948 14.4017C8.19948 14.3313 8.6284 14.3722 9.33566 14.4397ZM10.3131 9.58245C11.2711 9.38456 11.9217 8.61425 11.7663 7.86192C11.6109 7.10959 10.7083 6.66012 9.75029 6.85802C8.7923 7.05591 8.14167 7.82622 8.29708 8.57856C8.45249 9.33089 9.35508 9.78035 10.3131 9.58245Z" fill="#FF8371" />
                    <path d="M16.4962 15.5154C16.6215 15.2959 16.9388 15.2979 17.0611 15.5191L17.6614 16.6043C17.7813 16.821 17.6235 17.0867 17.3758 17.0851L16.161 17.0771C15.9134 17.0755 15.759 16.8078 15.8818 16.5926L16.4962 15.5154Z" fill="#FF8371" />
                </svg>
            </div>
            <div className="header-left-logo" onClick={onClickLogo}>Espello</div>
        </div>
        <div className="header-right">
            <div className="header-right-buttons" onClick={onClickEnterprise}>
                <div className="header-right-buttons-enterprise">Enterprises</div>
            </div>
            <div className="header-right-buttons" onClick={onClickLogo}>
                <div className="header-right-buttons-login">Join the waitlist</div>
            </div>
        </div>
    </div>);
}

export default Header;
