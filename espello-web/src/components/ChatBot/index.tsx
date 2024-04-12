import React, {useEffect, useState} from 'react'
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';
import './chat-bot.css'

const ChatBot = () => {
    const {transcript, resetTranscript} = useSpeechRecognition();
    const [transcriptInput, setTranscriptInput] = useState<string>();

    useEffect(() => {
        setTranscriptInput(transcript);
    }, [transcript])

    const startListening = () => {
        SpeechRecognition.startListening({continuous: true})
            .catch(error => {
                console.error('Error starting speech recognition:', error);
            });
    };

    const stopListening = () => {
        SpeechRecognition.stopListening()
            .then(() => {
                resetTranscript();
            })
            .catch(error => {
                console.error('Error starting speech recognition:', error);
            });
    }

    function onChangeTranscriptInput(e: any) {
        setTranscriptInput(e.target.value);
    }

    return (<React.Fragment>
        <div className="chat-bot-container">
            <div className="chat-bot-container-header">
                <div className="chat-bot-container-header-main">
                    <div className="chat-bot-container-header-main-left">
                        <div className="chat-bot-container-header-main-left-content">
                            Session Header - Product interview
                        </div>
                    </div>
                    <div className="chat-bot-container-header-main-centre">
                        <div className="chat-bot-container-header-main-centre-1">90</div>
                        <div className="chat-bot-container-header-main-centre-2">seconds</div>
                    </div>
                    <div className="chat-bot-container-header-main-right">
                        <div className="chat-bot-container-header-main-right-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                 fill="none">
                                <path d="M11.4988 11.5012L4.49728 4.49963" stroke="#6E6E6E" strokeWidth="1.00189"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11.4988 4.49963L4.49728 11.5012" stroke="#6E6E6E" strokeWidth="1.00189"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className="chat-bot-container-header-main-right-content">
                            Exit Interview
                        </div>
                    </div>
                </div>
                <div className="chat-bot-container-header-separator"></div>
            </div>
            <div className="chat-bot-container-main">
                <div className="chat-bot-container-main-transcript">
                    <div className="chat-bot-container-main-transcript-content">
                        <p>Alright.
                            I would like to understand more about operating model of the client.
                            Does our client manufacture the biscuits as well?</p>
                    </div>
                </div>
                <div className="chat-bot-container-main-icon">
                    <svg className="chat-bot-container-main-icon-content" xmlns="http://www.w3.org/2000/svg" width="72"
                         height="18" viewBox="0 0 72 18" fill="none">
                        <rect x="0.513153" width="18" height="18" rx="9" fill="#6E6E6E"/>
                        <rect x="27" width="18" height="18" rx="9" fill="#6E6E6E"/>
                        <rect x="53.4868" y="6.10352e-05" width="18" height="18" rx="9" fill="#6E6E6E"/>
                    </svg>
                </div>
                <div className="chat-bot-container-main-user">
                    <div className="chat-bot-container-main-user-field">
                        <input className="chat-bot-container-main-user-field-input" value={transcriptInput}
                               onChange={onChangeTranscriptInput}/>
                    </div>
                    <div className="chat-bot-container-main-user-button" onClick={startListening}>
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
                    <div className="chat-bot-container-main-user-button" onClick={stopListening}>
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
                </div>
            </div>
        </div>
    </React.Fragment>)
}

export default ChatBot;