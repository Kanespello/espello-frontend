import React from 'react';
import './header.css';

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <div className="header-left-logo">Espello.ai</div>
            </div>
            <div className="header-right">
                <div className="header-right-buttons">
                    <div className="header-right-buttons-login">Login</div>
                </div>
            </div>
        </div>
    );
}

export default Header;
