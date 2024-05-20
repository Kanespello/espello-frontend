import Header from "../Header";
import './index.css'

const Login = () => {

    const scrollFunc = () => { }

    return (
        <> 
           <Header scrollToCompnent={scrollFunc} enableOtherButtons={false} />
           <div className="user-login-container">
                <div className="user-login-container-inner">
                    <div className="user-login-container-inner-left">
                        <div className="user-login-container-inner-left-content">
                        <div className="user-login-container-inner-left-content-heading">
                            <div className="user-login-container-inner-left-content-heading1">Login to Espello!</div>
                            <div className="user-login-container-inner-left-content-heading2">
                                <div className="user-login-container-inner-left-content-heading2-1">Not yet with us?</div>
                                <div className="user-login-container-inner-left-content-heading2-2">Create account with email</div>
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
                        </div>
                        <div className="user-login-container-inner-left-content-primary-button">Login</div>
                        <div className="user-login-container-inner-left-content-or">OR</div>
                        <div className="user-login-container-inner-left-content-secondary-buttons">
                            <div className="user-login-container-inner-left-content-secondary-buttons-google">Google</div>
                            <div className="user-login-container-inner-left-content-secondary-buttons-linkedin">Linkedin</div>
                        </div>
                        </div>
                    </div>
                    <div className="user-login-container-inner-right"></div>
                </div>
           </div>
        </>
    );
}

export default Login;