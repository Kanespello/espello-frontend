import React, {useEffect, useMemo, useState} from "react";

const Answer = () => {

    const [userTranscript, setUserTranscript] = useState<string>('');
    const [isUserSpeaking, setIsUserSpeaking] = useState<boolean>(false);

    const recognition = useMemo(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        return new SpeechRecognition();
    }, [])

    useEffect(() => {
        let tempTranscript = '';

        recognition.lang = 'en-US';
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onstart = () => {
            setUserTranscript('');
            tempTranscript = '';
        };

        recognition.onresult = (event) => {
            const last = event.results.length - 1;
            tempTranscript = event.results[last][0].transcript;
            setUserTranscript(tempTranscript);
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            setIsUserSpeaking(false);
        };

        recognition.onend = () => {
            setIsUserSpeaking(false);
            setUserTranscript(tempTranscript);
        };

        return () => {
            recognition.abort();
        };
    }, [recognition]);

    const onChangeTranscript = (event: any) => {
        setUserTranscript(event.target.value);
    }

    const toggleListening = () => {
        if (isUserSpeaking) {
            recognition.stop();
        } else {
            recognition.start();
        }
        setIsUserSpeaking(!isUserSpeaking);
    };

    return (
        <div className="chat-bot-container-main-user">
            <div className="chat-bot-container-main-user-field">
                        <textarea
                            className="chat-bot-container-main-user-field-input"
                            value={userTranscript}
                            onChange={onChangeTranscript}
                            rows={2} // Set the initial number of visible rows
                        />
            </div>
            <div className="chat-bot-container-main-user-button" onClick={toggleListening}>
                <div className="chat-bot-container-main-user-button-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none">
                        <path d="M6.19531 14.9547H10.1968" stroke="black" strokeWidth="1.00189"
                              strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M12.1966 7.45337V8.45359C12.1966 10.6541 10.3962 12.4545 8.19569 12.4545C5.99522 12.4545 4.19482 10.6541 4.19482 8.45359V7.45337"
                            stroke="black" strokeWidth="1.00189" strokeLinecap="round"
                            strokeLinejoin="round"/>
                        <path d="M8.19629 12.4541V14.9565" stroke="black" strokeWidth="1.00189"
                              strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M8.19577 2.95181C7.9327 2.95048 7.67198 3.00132 7.42867 3.10138C7.18537 3.20144 6.96432 3.34874 6.7783 3.53477C6.59227 3.72079 6.44497 3.94184 6.34491 4.18514C6.24485 4.42845 6.19401 4.68917 6.19534 4.95224V8.42175C6.19534 9.52199 7.10179 10.4534 8.19577 10.4534C9.28976 10.4534 10.1962 9.54699 10.1962 8.42175V4.95224C10.1962 3.827 9.32102 2.95181 8.19577 2.95181Z"
                            stroke="black" strokeWidth="1.00189" strokeLinecap="round"
                            strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="chat-bot-container-main-user-button-content">
                    <span>AUDIO</span>
                </div>
            </div>
            <div className="chat-bot-container-main-user-button">
                <div className="chat-bot-container-main-user-button-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none">
                        <path d="M5.25073 16.4995L2.25031 13.499L5.25073 10.4986" stroke="#121212"
                              strokeWidth="1.50251" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M3.00073 13.4982H16.782C19.5364 13.4982 21.7507 11.1858 21.7507 8.43567V7.49817"
                            stroke="#121212" strokeWidth="1.50251" strokeLinecap="round"
                            strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="chat-bot-container-main-user-button-content">
                    <span>send</span>
                </div>
            </div>
        </div>)
}

export default Answer