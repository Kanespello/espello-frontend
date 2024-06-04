import React, { useState, FC, RefObject, useEffect } from 'react';
import './index.css';
import { API_WAITLIST } from '../../../util/AppConstants';

interface EnterpriseFormProps {
    targetRef: RefObject<HTMLDivElement>;
}

const EnterpriseForm: FC<EnterpriseFormProps> = ({ targetRef }) => {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        requirements: '',
    });

    const [message, setMessage] = useState<{ text: string, type: 'success' | 'error' } | null>(null);

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage(null);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [message]);

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPhone = (phone: string) => {
        const phoneRegex = /^[0-9]{10,15}$/;
        return phoneRegex.test(phone);
    };

    const handleSubmit = async (event?: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLInputElement>) => {
        if (event) {
            event.preventDefault();
        }

        const { email, phone } = formData;
        const errorMessages = [];

        if (!isValidEmail(email)) {
            errorMessages.push('a valid enterprise email address');
        }

        if (!isValidPhone(phone)) {
            errorMessages.push('a valid enterprise phone number');
        }

        if (errorMessages.length > 0) {
            let errorMessage = "Please enter ";

            if (errorMessages.length === 1) {
                errorMessage += `${errorMessages[0]}.`;
            } else {
                errorMessage += `${errorMessages.slice(0, -1).join(', ')} and ${errorMessages.slice(-1)}.`;
            }

            setMessage({ text: errorMessage, type: 'error' });
            return;
        }

        const queryParams = new URLSearchParams({
            email,
            phone,
            message: formData.requirements,
            isEnterprise: "true"
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
            setMessage({ text: 'Thanks for your interest. We will get back to you in 24 hours.', type: 'success' });
            setFormData({ email: '', phone: '', requirements: '' });

        } catch (error) {
            console.error('Error:', error);
            setMessage({ text: 'Failed to submit form.', type: 'error' });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    };

    return (
        <div className='enterprise-form' ref={targetRef}>
            <div className='enterprise-form-1'>
                <div className='enterprise-form-1-1'>Enterprises</div>
                <div className='enterprise-form-1-4'>
                    <div className='enterprise-form-1-4-bottom'>
                        <div className='enterprise-form-1-4-bottom-content'>ASSESSMENT TOOL FOR CONSULTING & PRODUCT POSITIONS</div>
                    </div>
                </div>
            </div>
            <div className='enterprise-form-2'>
                <div className='enterprise-form-2-1'>
                    <div className='enterprise-form-2-1-1'>
                        <div className='enterprise-form-2-1-left'>
                            <div className='enterprise-form-2-1-left-email'>
                                <input
                                    name='email'
                                    className='enterprise-form-2-1-left-email-content'
                                    placeholder='work email*'
                                    value={formData.email}
                                    onChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                />
                            </div>
                        </div>
                        <div className='enterprise-form-2-1-right'>
                            <div className='enterprise-form-2-1-left-phone'>
                                <input
                                    name='phone'
                                    className='enterprise-form-2-1-left-phone-content'
                                    placeholder='phone*'
                                    value={formData.phone}
                                    onChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='enterprise-form-2-1-2'>
                        <div className='enterprise-form-2-1-2-requirements'>
                            <input
                                name='requirements'
                                className='enterprise-form-2-1-2-requirements-content'
                                placeholder='requirements'
                                value={formData.requirements}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                            />
                        </div>
                    </div>
                    {!message && (
                        <div className='enterprise-form-2-1-3'>
                            <div className='enterprise-form-2-1-3-button' onClick={handleSubmit}>
                                Submit
                            </div>
                        </div>
                    )}
                    {message && (
                        <div className={`enterprise-form-message-${message.type}`}>
                            {message.text}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default EnterpriseForm;