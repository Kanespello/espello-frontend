import React, { FC, useEffect, useMemo, useState } from "react";
import { ConversationTurn } from "../../../../model/ConversationTurn";
import { ConversationTurnContextModel } from "../../../../model/ConversationTurnContextModel";

export interface AnswerProps {
    timerOut: boolean;
    sendIntervieweeResponse: (intervieweeText: string) => Promise<void>;
    conversationContext: ConversationTurnContextModel
}

const Answer: FC<AnswerProps> = ({ timerOut, sendIntervieweeResponse, conversationContext }) => {

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
        recognition.interimResults = false;

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
            setUserTranscript('');
        };

        return () => {
            recognition.abort();
        };
    }, [recognition]);

    const onChangeTranscript = (event: any) => {
        setUserTranscript(event.target.value);
    }

    useEffect(() => {
        if (conversationContext?.conversationTurn === ConversationTurn.INTERVIEWEE && !isUserSpeaking) {
            recognition.start();
            setIsUserSpeaking(true); // Set isUserSpeaking to true when recognition starts
        }
    }, [conversationContext?.conversationTurn]);

    useEffect(() => {

        if (timerOut) {
            // Call sendResponse function when timerOut becomes true
            sendResponse();
        }
    }, [timerOut]);

    const sendResponse = () => {
        recognition.stop();
        sendIntervieweeResponse(userTranscript);
        conversationContext?.changeConversationTurn(ConversationTurn.WAITING);
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
            <div className="chat-bot-container-main-user-button" onClick={sendResponse}>
                <div className="chat-bot-container-main-user-button-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none">
                        <path d="M5.25073 16.4995L2.25031 13.499L5.25073 10.4986" stroke="#121212"
                            strokeWidth="1.50251" strokeLinecap="round" strokeLinejoin="round" />
                        <path
                            d="M3.00073 13.4982H16.782C19.5364 13.4982 21.7507 11.1858 21.7507 8.43567V7.49817"
                            stroke="#121212" strokeWidth="1.50251" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="chat-bot-container-main-user-button-content">
                    <span>send</span>
                </div>
            </div>
        </div>)
}

export default Answer;