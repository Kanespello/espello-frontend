import React, { useState, FC, RefObject } from 'react';
import './index.css';

interface EnterpriseFormProps {
  targetRef: RefObject<HTMLDivElement>;
}

const EnterpriseForm: FC<EnterpriseFormProps> = ({ targetRef }) => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [requirements, setRequirements] = useState('');
    const [successMessage, setSuccessMessage] = useState('');  // State for handling success message

    const resetSuccessMessage = () =>{
        setTimeout(()=>{
            setSuccessMessage('');
        },2000);
    }

    const resetFields = () =>{
        setEmail('');  // Clear email field
        setPhone('');  // Clear phone field
        setRequirements('');  // Clear requirements field
    }
    const handleSubmit = async (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault(); 

        const queryParams = new URLSearchParams({
            email: email,
            phone: phone,
            message: requirements,
            isEnterprise:"true"
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
            setSuccessMessage('Form submitted successfully!');  // Set success message
            resetSuccessMessage();
            resetFields();

        } catch (error) {
            console.error('Error:', error);
            setSuccessMessage('Failed to submit form.');  // Set failure message
            resetSuccessMessage();
        }
    };

    return (
        <div className='enterprise-form' ref={targetRef}>
            <div className='enterprise-form-1'>
                {/* Other parts of the form */}
            </div>
            <div className='enterprise-form-2'>
                <div className='enterprise-form-2-1'>
                    <div className='enterprise-form-2-1-1'>
                        <div className='enterprise-form-2-1-left'>
                            <div className='enterprise-form-2-1-left-email'>
                                <input
                                    className='enterprise-form-2-1-left-email-content'
                                    placeholder='work email*'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='enterprise-form-2-1-right'>
                            <div className='enterprise-form-2-1-left-phone'>
                                <input
                                    className='enterprise-form-2-1-left-phone-content'
                                    placeholder='phone*'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='enterprise-form-2-1-2'>
                    <div className='enterprise-form-2-1-2-requirements'>
                        <input
                            className='enterprise-form-2-1-2-requirements-content'
                            placeholder='requirements'
                            value={requirements}
                            onChange={(e) => setRequirements(e.target.value)}
                        />
                        </div>
                    </div>
                    <div className='enterprise-form-2-1-3'>
                        <div className='enterprise-form-2-1-3-button' onClick={handleSubmit}>
                            Submit
                        </div>
                    </div>
                </div>
                {successMessage && <div className="enterprise-form-success-message">{successMessage}</div>}
            </div>
        </div>
    );
}

export default EnterpriseForm;
