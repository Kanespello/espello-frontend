import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import './index.css';
import { ConversationTurn } from "../../../../../model/ConversationTurn";
import { ConversationTurnContextModel } from "../../../../../model/ConversationTurnContextModel";

export interface AnswerProps {
    timerOut: boolean;
    sendIntervieweeResponse: (intervieweeText: string) => Promise<void>;
    conversationContext: ConversationTurnContextModel;
}

const Answer: FC<AnswerProps> = ({ timerOut, sendIntervieweeResponse, conversationContext }) => {
    const [userTranscript, setUserTranscript] = useState<string>('');
    const [isUserSpeaking, setIsUserSpeaking] = useState<boolean>(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const recognition = useMemo(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        return new SpeechRecognition();
    }, []);

    useEffect(() => {
        if (!recognition) return;

        if (conversationContext?.conversationTurn === ConversationTurn.INTERVIEWEE) {
            recognition.lang = 'en-US';
            recognition.continuous = true;
            recognition.interimResults = true;

            recognition.onstart = () => {
                console.info("Speech recognition started.");
                setUserTranscript('');
            };

            recognition.onresult = (event) => {
                let interimTranscript = '';
                for (let i = 0; i < event.results.length; i++) {
                    interimTranscript += ' ' + event.results[i][0].transcript;
                }
                setUserTranscript(interimTranscript);
            };

            recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                setIsUserSpeaking(false);
            };

            recognition.onend = () => {
                console.info("Speech recognition ended.");
                setIsUserSpeaking(false);
                if (conversationContext?.conversationTurn === ConversationTurn.INTERVIEWEE) {
                    recognition.start();
                    setIsUserSpeaking(true);
                }
               else{
                    recognition.stop();
                }
            };
        }

        return () => {
            recognition.abort();
            recognition.stop();
        };
    }, [recognition, conversationContext?.conversationTurn]);

    const onChangeTranscript = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserTranscript(event.target.value);
    };

    useEffect(() => {
        if (conversationContext?.conversationTurn === ConversationTurn.INTERVIEWEE && !isUserSpeaking) {
            recognition?.start();
            setIsUserSpeaking(true);
        }
    }, [conversationContext?.conversationTurn]);

    useEffect(() => {
        if (timerOut) {
            sendResponse();
        }
    }, [timerOut]);

    const sendResponse = async () => {
        try {
            recognition?.stop();
            await sendIntervieweeResponse(userTranscript);
            setUserTranscript('');
        } catch (error) {
            console.error('Error sending interviewee response:', error);
        }
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
        }
    }, [userTranscript]);


    return (
        <div className="chat-bot-container-main-user">
            <div className="chat-bot-container-main-user-field">
                <textarea
                    ref={textareaRef}
                    className="chat-bot-container-main-user-field-input"
                    value={conversationContext?.conversationTurn === ConversationTurn.INTERVIEWEE ? userTranscript : ""}
                    onChange={onChangeTranscript}
                    rows={2}
                    disabled={conversationContext?.conversationTurn === ConversationTurn.INTERVIEWER}
                />
            </div>
            <div className="chat-bot-container-main-user-button" onClick={sendResponse}>
                <div className="chat-bot-container-main-user-button-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5.25073 16.4995L2.25031 13.499L5.25073 10.4986" stroke="#121212" strokeWidth="1.50251" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3.00073 13.4982H16.782C19.5364 13.4982 21.7507 11.1858 21.7507 8.43567V7.49817" stroke="#121212" strokeWidth="1.50251" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="chat-bot-container-main-user-button-content">
                    <span>send</span>
                </div>
            </div>
        </div>
    );
};

export default Answer;