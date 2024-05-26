import React, { useEffect, useState } from 'react';
import './index.css'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Account/AuthContext';
import { SERVICE_URL_JAVA } from '../../../util/AppConstants';

interface ButtonOption {
    label: string;
    selected: boolean;
}
interface ButtonOptions {
    label: string;
    options: ButtonOption[]
}

const details: ButtonOptions[] = [
    {
        label: "role",
        options: [
            {
                label: "product",
                selected: false
            },
            {
                label: "Consultant",
                selected: true
            },
            {
                label: "Strategy",
                selected: false
            }
        ]
    },
    {
        label: "mode",
        options: [
            {
                label: "challenge",
                selected: true
            },
            {
                label: "friendly",
                selected: false
            },
            {
                label: "assisted",
                selected: false
            }
        ]
    },
    {
        label: "company type",
        options: [
            {
                label: "start-up",
                selected: true
            },
            {
                label: "multi-national",
                selected: false
            }
        ]
    }
]


const CreateSession = () => {

    const { user } = useAuth();

    const navigate = useNavigate();

    const registerUser = async () => {

        const url = `${SERVICE_URL_JAVA}/registration/api/v1/register`;
        const data = {
            name: user?.name,
            email: user?.email,
            registrationMedium: "gsignup"
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

            if (result.status === 'success') {
                console.error(result.data.errorDescription);
                await createSession(result.data.userId);
            } else {
                console.error('An unknown error occurred');
            }
        }
        catch (error: any) {
            console.error('Error:', error);
        }
    }

    const createSession = async (userId: number) => {
        const url = `${SERVICE_URL_JAVA}/session/api/v1/createSession`;
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

            if (result.status === 'success') {
                console.error(result.data.errorDescription);
                navigate(`/session/current-session/${result.data.sessionId}`);
            } else {
                console.error('An unknown error occurred');
            }
        }
        catch (error: any) {
            console.error('Error:', error);
        }

    }


    const startSession = async () => {
        await registerUser();
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