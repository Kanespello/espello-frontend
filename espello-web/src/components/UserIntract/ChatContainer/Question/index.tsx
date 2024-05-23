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
                    This video assessment consists of 5 question(s) and should take you 10 minutes to complete, depending on the number of questions you are assigned.
You are required to complete your assessment within a single sitting.
Please upload the right identification documents as mandated (Govt ID etc.)
Once you are presented with your first question, an automated timer starts. You will be given a preparation time of 45 seconds , followed by a recording time limit that may vary for each question.
Remember to keep track of the timer while preparing or recording your response. Should you find yourself ready before the time limit, you can choose to either start recording your responses or to submit them beforehand.
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