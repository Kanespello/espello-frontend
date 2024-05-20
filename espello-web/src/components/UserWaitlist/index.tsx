import { useState } from "react";
import Header from "../Header";
import './index.css'

const UserWaitlist = () => {

    const [email, setEmail] = useState<string>('');
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            setTimeout(() => {
                setError('');
            }, 2000)
            return;
        }

        setError(''); // Clear error if email is valid

        const queryParams = new URLSearchParams({
            email: email,
            isEnterprise: "false"
        }).toString();

        try {
            const response = await fetch(`https://espello.co/java_service/session/api/v1/joinWaitlist?${queryParams}`, {
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

    const scrollFunc = () => { }

    return (
        <>
            <Header scrollToCompnent={scrollFunc} enableOtherButtons={false} />
            <div className="user-waitlist-frame-input">
                {!isSuccess ? 
               <div className="user-waitlist-frame-submit">
                    <div className="user-waitlist-frame-input-content-top">
                        <input
                            className="user-waitlist-frame-input-content-left"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                        <div className="user-waitlist-frame-input-content-right" onClick={handleSubmit}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M12.5625 5.74976L19.3125 12.4998L12.5625 19.2498" stroke="#FF8371" stroke-width="1.50251" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.375 12.4999H4.6875" stroke="#FF8371" stroke-width="1.50251" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    {error ?
                        <div className="user-waitlist-frame-input-content-bottom">{error}</div>
                        :
                        <div className="user-waitlist-frame-input-content-bottom">
                            Enter email address to join waitlist
                        </div>
                    }
                </div>
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
        </>
    );
}

export default UserWaitlist;