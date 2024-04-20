import React, { FC, useContext, useEffect, useState } from "react";
import { ConversationTurn } from "../../../../model/ConversationTurn";
import { ConversationTurnContextModel } from "../../../../model/ConversationTurnContextModel";


const SERVICE_URL = "https://espello.co/python_service";
export interface QuestionProps {
    threadId: string;
    interviewertext: string;
    setInterviewerText: React.Dispatch<React.SetStateAction<string>>;
    conversationContext : ConversationTurnContextModel;
}

const Question: FC<QuestionProps> = ({ threadId,interviewertext,setInterviewerText,conversationContext }) => {

    const [espelloTranscript, setEspelloTranscript] = useState<string>('');

    const callSpeakSynthesiser = (transcript: string): void => {

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

        // Speak only when the component mounts
        callSpeakSynthesiser(interviewertext);

        // Cleanup function to stop speech when the component unmounts
        return () => {
            window.speechSynthesis.cancel();
        };
    }, [interviewertext]); // Re-run effect when interviewertext changes

    return (<div className="chat-bot-container-main-transcript">
        <div className="chat-bot-container-main-transcript-content">
            <p>{espelloTranscript}</p>
        </div>
    </div>)
};

export default Question;
