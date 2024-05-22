import React, { FC, useEffect, useState } from "react";
import { ConversationTurn } from "../../../../model/ConversationTurn";
import { ConversationTurnContextModel } from "../../../../model/ConversationTurnContextModel";

interface QuestionProps {
    interviewerText: string;
    setInterviewerText: React.Dispatch<React.SetStateAction<string>>;
    conversationContext: ConversationTurnContextModel;
}

const Question: FC<QuestionProps> = ({ interviewerText, setInterviewerText, conversationContext }) => {

    const [espelloTranscript, setEspelloTranscript] = useState<string>('');
    const [isDialogVisible, setIsDialogVisible] = useState<boolean>(true);

    const speakSynthesizer = (transcript: string): void => {
        conversationContext?.changeConversationTurn(ConversationTurn.INTERVIEWER);

        const utterance: SpeechSynthesisUtterance = new window.SpeechSynthesisUtterance(transcript);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;

        utterance.onboundary = (event: SpeechSynthesisEvent): void => {
            const spokenWord: string = transcript.slice(0, event.charIndex + event.charLength);
            setEspelloTranscript(spokenWord);
        };

        utterance.onend = () => {
            conversationContext?.changeConversationTurn(ConversationTurn.INTERVIEWEE);
        };

        window.speechSynthesis.speak(utterance);
    };

    useEffect(() => {
        if (interviewerText.length > 0)
            speakSynthesizer(interviewerText);

        return () => {
            window.speechSynthesis.cancel();
        };
    }, [interviewerText]);

    return (
        <>
            {isDialogVisible && (
                <div className="chat-bot-container-main-dialog-box">
                    <div className="chat-bot-container-main-dialog-box-heading">Instructions</div>
                    <div className="chat-bot-container-main-dialog-box-content">
                        1. Each query must be answered within a 90-second timeframe. <br />
                        2. It is advisable to use Safari as the browser. <br />
                        3. In Chrome, the speech recognizer will stop after approximately 10 seconds of silence. <br />
                    </div>
                    <div className="chat-bot-container-main-dialog-box-button" onClick={() => {
                        setIsDialogVisible(false);
                        setInterviewerText('Hi. Can you please introduce yourself? Maybe tell about your work experience.');
                    }}>Got it</div>
                </div>
            )}
            <div className="chat-bot-container-main-transcript">
                <div className="chat-bot-container-main-transcript-content">
                    <p>{espelloTranscript}</p>
                </div>
            </div>
        </>
    );
};

export default Question;