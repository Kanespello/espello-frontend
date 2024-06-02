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
    const [interimTranscript, setInterimTranscript] = useState<string>('');
    const [finalTranscript, setFinalTranscript] = useState<string>('');
    const [isSpeechRecognitionActive, setIsSpeechRecognitionActive] = useState<boolean>(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Initialize SpeechRecognition
    const recognition = useMemo(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        return new SpeechRecognition();
    }, []);

    // Initialize SpeechRecognition and event listeners
    useEffect(() => {
        if (!recognition) return;

        // Configure SpeechRecognition
        recognition.lang = 'en-US';
        recognition.continuous = true;
        recognition.interimResults = true;

        // Event listeners for SpeechRecognition
        recognition.onstart = () => {
            console.info("Speech recognition started.");
        };

        recognition.onresult = (event) => {
            let interim = '';
            for (let i = 0; i < event.results.length; i++) {
                if (event.results[i].isFinal) {
                    if (i === event.results.length - 1)
                        setFinalTranscript(prev => prev + ' ' + event.results[i][0].transcript)
                } else
                    interim += ' ' + event.results[i][0].transcript;
            }
            setInterimTranscript(interim);
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            setIsSpeechRecognitionActive(false);
        };

        recognition.onend = () => {
            console.info("Speech recognition ended.");
            setIsSpeechRecognitionActive(false);
            if (conversationContext?.conversationTurn === ConversationTurn.INTERVIEWEE) {
                recognition.start();
                setIsSpeechRecognitionActive(true);
            } else {
                recognition.stop();
            }
        };

        return () => {
            recognition.abort();
        };
    }, [recognition, conversationContext?.conversationTurn]);

    // Update transcript on textarea change
    const handleTranscriptChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFinalTranscript(event.target.value);
    };

    // Start SpeechRecognition when conversation turn is INTERVIEWEE and not already active
    useEffect(() => {
        if (conversationContext?.conversationTurn === ConversationTurn.INTERVIEWEE && !isSpeechRecognitionActive) {
            recognition?.start();
            setIsSpeechRecognitionActive(true);
        }
    }, [conversationContext?.conversationTurn, isSpeechRecognitionActive]);

    // Send response when timer runs out
    useEffect(() => {
        if (timerOut) {
            sendResponse();
        }
    }, [timerOut]);

    // Auto-scroll textarea to bottom
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
        }
    }, [interimTranscript]);

    // Listen for Enter key press to send response
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                sendResponse();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [finalTranscript, interimTranscript]);

    // Send interviewee response
    const sendResponse = async () => {
        try {
            recognition?.stop();
            await sendIntervieweeResponse((finalTranscript + interimTranscript));
            setInterimTranscript('');
            setFinalTranscript('')
        } catch (error) {
            console.error('Error sending interviewee response:', error);
        }
    };

    return (
        <div className="chat-bot-container-main-user">
            <div className="chat-bot-container-main-user-field">
                <textarea
                    ref={textareaRef}
                    className="chat-bot-container-main-user-field-input"
                    value={conversationContext?.conversationTurn === ConversationTurn.INTERVIEWEE ? (finalTranscript + interimTranscript) : ""}
                    onChange={handleTranscriptChange}
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