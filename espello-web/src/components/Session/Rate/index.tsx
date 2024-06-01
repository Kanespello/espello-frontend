import { useState } from 'react';
import './index.css'
import { SERVICE_URL_JAVA } from '../../../util/AppConstants';

interface RateProp {
    sessionId: string | undefined;
    setIsRateBoxVisible: React.Dispatch<React.SetStateAction<boolean>>;
    setIsSummaryPageVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Rate: React.FC<RateProp> = ({ sessionId, setIsRateBoxVisible,setIsSummaryPageVisible }) => {

    const [rating, setRating] = useState<number>(0);
    const [comment, setComment] = useState<string>('');

    const updateRating = (index: number) => {
        setRating(index + 1);
    }

    const submitFeedback = async () => {

        try {
            const response = await fetch(`${SERVICE_URL_JAVA}/session/api/v1/submitSessionFeedback?sessionId=${sessionId}&rating=${rating}&comments=${comment}'`);
            const result = await response.json();

            if (result.status === 'success') {
                console.log(result);
                setIsRateBoxVisible(false)
                setIsSummaryPageVisible(true)
            } else {
                alert('An unknown error occurred, please retry')
            }
        }
        catch (error: any) {
            console.error('Error:', error);
        }

    }

    return (
        <div className='rate-main'>
            <div className='rate-container'>
                <div className='rate-container-heading'>
                    <div className='rate-container-heading1'>How was it?</div>
                    <div className='rate-container-heading2'>Rate & tell us</div>
                </div>
                <div className='rate-container-feedback'>
                    <div className='rate-container-feedback-rate'>
                        {
                            Array.from({ length: 5 }, (_, index) => (
                                rating >= (index + 1) ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none" onClick={() => updateRating(index)}>
                                        <path d="M12.1288 1.04558C12.5114 0.366931 13.4886 0.36693 13.8712 1.04557L17.2189 6.98512C17.3616 7.2383 17.6074 7.41687 17.8923 7.47435L24.5757 8.82286C25.3393 8.97694 25.6413 9.90638 25.1141 10.4799L20.4997 15.4992C20.303 15.7132 20.2092 16.0021 20.2425 16.2908L21.0253 23.0638C21.1147 23.8377 20.3241 24.4121 19.6158 24.0879L13.4162 21.2505C13.1519 21.1295 12.8481 21.1295 12.5838 21.2505L6.38425 24.0879C5.67589 24.4121 4.88526 23.8377 4.9747 23.0638L5.75747 16.2908C5.79083 16.0021 5.69695 15.7132 5.50027 15.4992L0.885936 10.4799C0.358709 9.90638 0.660705 8.97694 1.42434 8.82286L8.10771 7.47435C8.39259 7.41687 8.63837 7.2383 8.78107 6.98512L12.1288 1.04558Z" fill="url(#paint0_linear_1116_1075)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_1116_1075" x1="7" y1="1" x2="15.5" y2="26" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.07" stop-color="#E8DC97" />
                                                <stop offset="0.26772" stop-color="#F5D725" />
                                                <stop offset="0.535" stop-color="#F5D725" />
                                                <stop offset="1" stop-color="#9F6518" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none" onClick={() => updateRating(index)}>
                                        <path d="M12.5644 1.29108C12.7557 0.95176 13.2443 0.951762 13.4356 1.29108L16.7834 7.23063C16.9974 7.6104 17.3661 7.87825 17.7934 7.96448L24.4768 9.31298C24.8586 9.39002 25.0096 9.85474 24.746 10.1415L20.1316 15.1608C19.8366 15.4818 19.6958 15.9152 19.7458 16.3482L20.5286 23.1212C20.5733 23.5081 20.178 23.7953 19.8238 23.6332L13.6242 20.7958C13.2279 20.6144 12.7721 20.6144 12.3758 20.7958L6.17617 23.6332C5.82199 23.7953 5.42667 23.5081 5.47139 23.1212L6.25416 16.3482C6.30421 15.9152 6.16339 15.4818 5.86836 15.1608L1.25403 10.1415C0.990416 9.85474 1.14141 9.39002 1.52323 9.31298L8.2066 7.96448C8.63392 7.87826 9.0026 7.6104 9.21665 7.23063L12.5644 1.29108Z" stroke="#6E6E6E" />
                                    </svg>
                            ))
                        }
                    </div>
                    <div className='rate-container-feedback-content'>
                        <textarea className='rate-container-feedback-content-input' placeholder='' rows={4} value={comment} onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => { setComment(event.target.value); }} />
                    </div>
                </div>
                <div className='rate-container-main'>
                    <div className='rate-container-submit' onClick={submitFeedback}>
                        <div className='rate-container-submit-button'>Submit</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rate;