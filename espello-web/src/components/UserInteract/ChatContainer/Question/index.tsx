import React, { FC, useEffect, useState } from "react";
import './index.css'
import { ConversationTurn } from "../../../../model/ConversationTurn";
import { ConversationTurnContextModel } from "../../../../model/ConversationTurnContextModel";

interface QuestionProps {
    interviewerText: string;
    setInterviewerText: React.Dispatch<React.SetStateAction<string>>;
    conversationContext: ConversationTurnContextModel;
}

const Question: FC<QuestionProps> = ({ interviewerText, setInterviewerText, conversationContext }) => {

    const [espelloTranscript, setEspelloTranscript] = useState<string>('');

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
        <div className="chat-bot-container-main-transcript">
            <div className="chat-bot-container-main-transcript-content">
                <p>{espelloTranscript}</p>
            </div>
        </div>
    );
};

export default Question;