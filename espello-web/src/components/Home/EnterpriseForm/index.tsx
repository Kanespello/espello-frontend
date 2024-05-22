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

    const [message, setMessage] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setMessage('');
        }, 2000);

        return () => clearTimeout(timer);
    }, [message]);

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPhone = (phone: string) => {
        const phoneRegex = /^[0-9]{10,15}$/;
        return phoneRegex.test(phone);
    };

    const handleSubmit = async (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();

        const { email, phone, requirements } = formData;

        if (!isValidEmail(email)) {
            setMessage('Invalid email address.');
            return;
        }

        if (!isValidPhone(phone)) {
            setMessage('Invalid phone number.');
            return;
        }

        const queryParams = new URLSearchParams({
            email,
            phone,
            message: requirements,
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
            setMessage('Thanks for your interest. We will get back to you in 24 hours.');
            setFormData({ email: '', phone: '', requirements: '' });

        } catch (error) {
            console.error('Error:', error);
            setMessage('Failed to submit form.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className='enterprise-form' ref={targetRef}>
            <div className='enterprise-form-1'>
                <div className='enterprise-form-1-1'>Enterprises</div>
                <div className='enterprise-form-1-2'></div>
                <div className='enterprise-form-1-3'></div>
                <div className='enterprise-form-1-4'>
                    <div className='enterprise-form-1-4-top'>
                        {/* <div className='enterprise-form-1-4-top-content'>candidate screening tool</div> */}
                    </div>
                    <div className='enterprise-form-1-4-bottom'>
                        <div className='enterprise-form-1-4-bottom-content'>assessment tool for Product positions</div>
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
                    {message && <div className="enterprise-form-success-message">{message}</div>}
                </div>
            </div>
        </div>
    );
}

export default EnterpriseForm;