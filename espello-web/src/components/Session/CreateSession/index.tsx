import React from 'react';
import './index.css'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Account/AuthContext';
import { SERVICE_URL_PYTHON } from '../../../util/AppConstants';
import { details } from './util';

const CreateSession = () => {

    const { user } = useAuth();

    const navigate = useNavigate();

    const createSession = async (userId: number) => {
        const url = `${SERVICE_URL_PYTHON}/save_session_details`;
    
        const data = {
            "userId": userId,
            "sessionDetails": {
                "role": "consultant",
                "mode": "easy",
                "industry": "friendly",
                "companyType": "start-up"
            }
        };
    
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
    
            const result = await response.json();
    
            if (result?.data.status === 'success') {
                console.log(result.data); // Adjusted logging to `console.log` to log the response data
                navigate(`/session/current-session/${result?.data.sessionId}`);
            } else {
                console.error('An unknown error occurred');
                // TODO: Handle session not created
            }
        } catch (error: any) {
            console.error('Error:', error);
        }
    };
    

    const startSession = async () => {
        console.log(user)
        await createSession(user?.user_id);
    }

    return (
        <div className="container-new-session">
            <div className='container-new-session-inner'>
                <div className='container-new-session-inner-details'>
                    <div className='container-new-session-inner-details-options'>
                        <div className='container-new-session-inner-details-options-heading'>Enter session details</div>
                        {details?.map(option =>
                            <React.Fragment key={option.label}>
                                <div className='container-new-session-inner-details-option'>
                                    <div className='container-new-session-inner-details-option-label'>{option.label}</div>
                                    <div className='container-new-session-inner-details-option-buttons'>
                                        {option.options.map(button => <div key={button.label} className={"container-new-session-inner-details-option-button" + (button.selected ? " option-button" : "")}>{button.label}</div>)}
                                    </div>
                                </div>
                            </React.Fragment>
                        )}
                        <div className='container-new-session-inner-details-option option-dropdown'>
                            <div className='container-new-session-inner-details-option-label'>Industry</div>
                            <div className='container-new-session-inner-details-option-dropdown'>
                                <div className='container-new-session-inner-details-option-dropdown-inner'>
                                    <div className='container-new-session-inner-details-option-dropdown-inner-content'>Pick a random</div>
                                    <div className='container-new-session-inner-details-option-dropdown-inner-arrow'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M3.49829 5.74951L7.99927 10.2505L12.5003 5.74951" stroke="#6E6E6E" stroke-width="1.00189" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container-new-session-inner-details-button' onClick={startSession}>Start session</div>
                </div>
            </div>
        </div>
    )
}

export default CreateSession;