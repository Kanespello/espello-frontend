import React, { useState, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import './index.css';
import { API_WAITLIST } from "../../util/AppConstants";

const UserWaitlist = () => {
    const [email, setEmail] = useState<string>('');
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess) {
            const timer = setTimeout(() => {
                navigate('/');
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [isSuccess, navigate]);

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            setTimeout(() => {
                setError('');
            }, 2000);
            return;
        }

        setError(''); // Clear error if email is valid

        const queryParams = new URLSearchParams({
            email: email,
            isEnterprise: "false"
        }).toString();

        try {
            const response = await fetch(`${API_WAITLIST}?${queryParams}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Success:', result);
            setIsSuccess(true);  // Set success message

        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <React.Fragment>
            <Header scrollToCompnent={() => { }} enableOtherButtons={false} />
            <div className="user-waitlist-frame-input">
                {!isSuccess ?
                    <form className="user-waitlist-frame-submit" onSubmit={handleSubmit}>
                        <div className="user-waitlist-frame-input-content-top">
                            <input
                                className="user-waitlist-frame-input-content-left"
                                placeholder="example@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button type="submit" className="user-waitlist-frame-input-content-right-button">
                                <div className="user-waitlist-frame-input-content-right">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path d="M12.562 5.74977L19.312 12.4998L12.562 19.2498" stroke="#FF8371" stroke-width="1.50251" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M18.3755 12.5H4.68799" stroke="#FF8371" stroke-width="1.50251" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                        {error ?
                            <div className="user-waitlist-frame-input-content-bottom">{error}</div>
                            :
                            <div className="user-waitlist-frame-input-content-bottom">
                                Enter email address to join waitlist
                            </div>
                        }
                    </form>
                    :
                    <div className="user-waitlist-frame-submit">
                        <div className="user-waitlist-frame-submit-top">
                            Thanks!
                        </div>
                        <div className="user-waitlist-frame-submit-bottom">
                            Lookout for our email as we open for early birds in 30 days
                        </div>
                    </div>
                }
            </div>
        </React.Fragment>
    );
}

export default UserWaitlist;
