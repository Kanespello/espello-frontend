import React, { useState, useEffect } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Account/AuthContext';
import { SERVICE_URL_PYTHON } from '../../../util/AppConstants';
import { ButtonOptions, sessionDetailButtonOptions } from './util';
import { PATH_CURRENT_SESSION_WITHOUT_SESSION_ID } from '../../../util/SiteRoutes';

interface SessionDetails {
    role: string;
    mode: string;
    industry: string;
    companyType: string;
}

const CreateSession = () => {
    const { userDetails } = useAuth();
    const navigate = useNavigate();

    const [sessionDetailOptions, setSessionDetailOptions] = useState<ButtonOptions[]>(sessionDetailButtonOptions);
    const [sessionDetails, setSessionDetails] = useState<SessionDetails>(() => {
        const defaultSessionDetails: SessionDetails = {
            role: '',
            mode: '',
            industry: 'edtech', // Default value for industry
            companyType: ''
        };
        sessionDetailOptions.forEach(option => {
            const selectedButton = option.options.find(button => button.selected);
            if (selectedButton) {
                defaultSessionDetails[option.label as keyof SessionDetails] = selectedButton.displayLabel;
            }
        });
        return defaultSessionDetails;
    });

    const createSession = async (userId: string) => {
        const url = `${SERVICE_URL_PYTHON}/save_session_details`;
        const data = { userId, sessionDetails };
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
                console.log(result.data);
                console.log(`${PATH_CURRENT_SESSION_WITHOUT_SESSION_ID}/${result?.data.sessionId}`)
                navigate(`${PATH_CURRENT_SESSION_WITHOUT_SESSION_ID}/${result?.data.sessionId}`);
            } else {
                console.error('An unknown error occurred');
                // TODO: Handle session not created
            }
        } catch (error: any) {
            console.error('Error:', error);
        }
    };

    const handleOptionClick = (optionType: keyof SessionDetails, value: string, active: boolean) => {
        if (active) {
            setSessionDetails(prevState => ({
                ...prevState,
                [optionType]: value
            }));
            const updatedOptions = sessionDetailOptions.map(option => {
                if (option.label === optionType) {
                    return {
                        ...option,
                        options: option.options.map(button => ({
                            ...button,
                            selected: button.displayLabel === value
                        }))
                    };
                }
                return option;
            });
            setSessionDetailOptions(updatedOptions);
        }
    };

    const startSession = async () => {
        await createSession(userDetails?.user_id as string);
    };

    return (
        <div className="container-new-session">
            <div className='container-new-session-inner'>
                <div className='container-new-session-inner-details'>
                    <div className='container-new-session-inner-details-options'>
                        <div className='container-new-session-inner-details-options-heading'>Enter session details</div>
                        {sessionDetailOptions?.map(option =>
                            <div key={option.label}>
                                <div className='container-new-session-inner-details-option'>
                                    <div className='container-new-session-inner-details-option-label'>{option.displayLabel}</div>
                                    <div className='container-new-session-inner-details-option-buttons'>
                                        {option.options.map(button =>
                                            <div
                                                key={button.displayLabel}
                                                className={"container-new-session-inner-details-option-button" + (button.active ? (button.selected ? " option-button-selected" : " option-button-not-selected") : "")}
                                                onClick={() => handleOptionClick(option.label as keyof SessionDetails, button.displayLabel, button.active)}
                                            >
                                                {button.displayLabel}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className='container-new-session-inner-details-option option-dropdown'>
                            <div className='container-new-session-inner-details-option-label'>Industry</div>
                            <div className='container-new-session-inner-details-option-dropdown'>
                                <div className='container-new-session-inner-details-option-dropdown-inner'>
                                    <div className='container-new-session-inner-details-option-dropdown-inner-content'>Pick a random</div>
                                    <div className='container-new-session-inner-details-option-dropdown-inner-arrow'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M3.49829 5.74951L7.99927 10.2505L12.5003 5.74951" stroke="#6E6E6E" strokeWidth="1.00189" strokeLinecap="round" strokeLinejoin="round" />
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
    );
};

export default CreateSession;