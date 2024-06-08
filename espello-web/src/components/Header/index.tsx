import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { PATH_BLOGS, PATH_HOME, PATH_USER_WAITLIST } from '../../util/SiteRoutes';

interface HeaderProps {
    scrollToComponent: () => void
    enableOtherButtons?: boolean
}

const Header: FC<HeaderProps> = ({ scrollToComponent, enableOtherButtons }) => {

    const [isAndroidHeaderCollapsed, setIsAndroidHeaderCollapsed] = useState<boolean>(true);

    const navigate = useNavigate();

    const onClickEnterprise = () => {
        setIsAndroidHeaderCollapsed(true)
        scrollToComponent();
    };

    const onClickUserWaitlist = () => {
        navigate(PATH_USER_WAITLIST);
    };

    const onClickLogo = () => {
        navigate(PATH_HOME);
    };

    const onClickBlogs = () => {
        window.open(PATH_BLOGS, '_blank');
    };    

    return (
        <React.Fragment>
            <div className="header-pc">
                <div className="header-left" onClick={onClickLogo}>
                    <div className='header-left-logo-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.33566 14.4397C12.5028 14.7417 21.2514 15.5762 22.06 9.33501C23.0491 1.70008 16.1797 0 10.654 0C5.12826 0 -0.381223 1.82373 0.0207368 9.33501C0.244316 13.5129 2.21015 19.1989 9.4877 19.4919C13.3621 19.6479 19.3073 17.4978 19.3073 16.8545C19.3073 15.8235 18.3294 15.899 16.5353 16.0375C15.3415 16.1297 13.7863 16.2497 11.9174 16.0903C9.96003 15.9233 8.19948 14.7871 8.19948 14.4017C8.19948 14.3313 8.6284 14.3722 9.33566 14.4397ZM10.3131 9.58245C11.2711 9.38456 11.9217 8.61425 11.7663 7.86192C11.6109 7.10959 10.7083 6.66012 9.75029 6.85802C8.7923 7.05591 8.14167 7.82622 8.29708 8.57856C8.45249 9.33089 9.35508 9.78035 10.3131 9.58245Z" fill="#FF8371" />
                            <path d="M16.4962 15.5154C16.6215 15.2959 16.9388 15.2979 17.0611 15.5191L17.6614 16.6043C17.7813 16.821 17.6235 17.0867 17.3758 17.0851L16.161 17.0771C15.9134 17.0755 15.759 16.8078 15.8818 16.5926L16.4962 15.5154Z" fill="#FF8371" />
                        </svg>
                    </div>
                    <div className="header-left-logo">Espello</div>
                </div>
                <div className="header-right">
                    {enableOtherButtons &&
                        <div className="header-right-buttons" onClick={onClickEnterprise}>
                            <div className="header-right-buttons-enterprise">Enterprises</div>
                        </div>}
                    {enableOtherButtons &&
                        <div className="header-right-buttons" onClick={onClickBlogs}>
                            <div className="header-right-buttons-enterprise">Blogs</div>
                        </div>}
                    {enableOtherButtons &&
                        <div className="header-right-buttons" onClick={onClickUserWaitlist}>
                            <div className="header-right-buttons-login">Join the waitlist</div>
                        </div>}
                </div>
            </div>
            <div className="header-android">
                <div className="header-android-left" onClick={onClickLogo}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none" onClick={onClickLogo}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.33566 14.4397C12.5028 14.7417 21.2514 15.5762 22.06 9.33501C23.0491 1.70008 16.1797 0 10.654 0C5.12826 0 -0.381223 1.82373 0.0207368 9.33501C0.244316 13.5129 2.21015 19.1989 9.4877 19.4919C13.3621 19.6479 19.3073 17.4978 19.3073 16.8545C19.3073 15.8235 18.3294 15.899 16.5353 16.0375C15.3415 16.1297 13.7863 16.2497 11.9174 16.0903C9.96003 15.9233 8.19948 14.7871 8.19948 14.4017C8.19948 14.3313 8.6284 14.3722 9.33566 14.4397ZM10.3131 9.58245C11.2711 9.38456 11.9217 8.61425 11.7663 7.86192C11.6109 7.10959 10.7083 6.66012 9.75029 6.85802C8.7923 7.05591 8.14167 7.82622 8.29708 8.57856C8.45249 9.33089 9.35508 9.78035 10.3131 9.58245Z" fill="#FF8371" />
                        <path d="M16.4962 15.5156C16.6215 15.296 16.9388 15.2981 17.0611 15.5193L17.6614 16.6044C17.7813 16.8212 17.6235 17.0868 17.3758 17.0852L16.161 17.0772C15.9134 17.0756 15.759 16.8079 15.8818 16.5928L16.4962 15.5156Z" fill="#FF8371" />
                    </svg>
                </div>
                <div className="header-android-right" onClick={() => setIsAndroidHeaderCollapsed(!isAndroidHeaderCollapsed)}>
                    {enableOtherButtons && <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" style={{ display: isAndroidHeaderCollapsed ? "block" : "none" }}>
                            <path d="M3.00098 18.75H21.001V16.7498H3.00098V18.75ZM3.00098 13.7498H21.001V11.7502H3.00098V13.7498ZM3.00098 6.75V8.75016H21.001V6.75H3.00098Z" fill="#F4EAE7" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ display: isAndroidHeaderCollapsed ? "none" : "block" }}>
                            <path d="M18.749 6.81887L17.1792 5.24902L11.999 10.4292L6.81887 5.24902L5.24902 6.81887L10.4292 11.999L5.24902 17.1792L6.81887 18.749L11.999 13.5689L17.1792 18.749L18.749 17.1792L13.5689 11.999L18.749 6.81887Z" fill="#F4EAE7" />
                        </svg>
                    </>}
                </div>
            </div>
            <div className='header-android-open' style={{ display: isAndroidHeaderCollapsed ? "none" : "block" }}>
                <div className='header-android-open-button' onClick={onClickEnterprise}>
                    Enterprises
                </div>
                <div className='header-android-open-button' onClick={onClickBlogs}>
                    Blogs
                </div>
                <div className='header-android-open-button' onClick={onClickUserWaitlist}>
                    Join the waitlist
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;
