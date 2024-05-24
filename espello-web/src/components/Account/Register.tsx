interface RegisterProps {
    onLoginClick: () => void;
}

const Register: React.FC<RegisterProps> = ({ onLoginClick }) => {
    return (<div className="user-login-container">
        <div className="user-login-container-inner">
            <div className="user-login-container-inner-left">
                <div className="user-login-container-inner-left-content">
                    <div className="user-login-container-inner-left-content-heading">
                        <div className="user-login-container-inner-left-content-heading1">Create account with email</div>
                        <div className="user-login-container-inner-left-content-heading2">
                            <div className="user-login-container-inner-left-content-heading2-2" onClick={onLoginClick}>Already have an account? Log in</div>
                        </div>
                    </div>
                    <div className="user-login-container-inner-left-content-fields">
                        <div className="user-login-container-inner-left-content-fields-email">
                            <div className="user-login-container-inner-left-content-fields-email-input">
                                <input className="user-login-container-inner-left-content-fields-email-input-content" placeholder="email"></input>
                            </div>
                        </div>
                        <div className="user-login-container-inner-left-content-fields-password">
                            <div className="user-login-container-inner-left-content-fields-password-input">
                                <input className="user-login-container-inner-left-content-fields-password-input-content" placeholder="password"></input>
                            </div>
                        </div>
                        <div className="user-login-container-inner-left-content-fields-password">
                            <div className="user-login-container-inner-left-content-fields-password-input">
                                <input className="user-login-container-inner-left-content-fields-password-input-content" placeholder="confirm password"></input>
                            </div>
                        </div>
                    </div>
                    <div className="user-login-container-inner-left-content-primary-button">Create account</div>
                </div>
            </div>
            <div className="user-login-container-inner-right"></div>
        </div>
    </div>)
}

export default Register