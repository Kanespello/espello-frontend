import React, { FC, SetStateAction, useEffect, useRef, useState } from "react";
import './index.css';
import { ConversationTurn } from "../../../../../model/ConversationTurn";
import { ConversationTurnContextModel } from "../../../../../model/ConversationTurnContextModel";
import { SPEAKER_LAST_TEXT } from "../../../../../util/AppConstants";

interface QuestionProps {
    interviewerText: string;
    conversationContext: ConversationTurnContextModel;
    setIsRateBoxVisible: React.Dispatch<SetStateAction<boolean>>;
}

const Question: FC<QuestionProps> = ({ interviewerText, setIsRateBoxVisible, conversationContext }) => {

    const [espelloTranscript, setEspelloTranscript] = useState<string>('');
    const transcriptRef = useRef<HTMLParagraphElement>(null);

    const formatTranscript = (transcript: string): string => {
        return transcript
            .replace(/\*\*(.*?)\*\*/g, '<i><strong>$1</strong></i>') // Bold the text between **
            .replace(/(\d\.\s\*\*[^:]+\*\*[^.]+\.)/g, '$1<br><br>') // Add line breaks after each strategy
            .replace(/\n/g, '<br>'); // Ensure newlines are converted to <br> tags
    };

    const speakSynthesizer = (transcript: string): void => {
        conversationContext?.changeConversationTurn(ConversationTurn.INTERVIEWER);

        const utterance: SpeechSynthesisUtterance = new window.SpeechSynthesisUtterance(transcript);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;

        utterance.onboundary = (event: SpeechSynthesisEvent): void => {
            const spokenWord: string = transcript.slice(0, event.charIndex + event.charLength);
            const formattedSpokenWord = formatTranscript(spokenWord);
            setEspelloTranscript(formattedSpokenWord);

            //Check for interview closer
            const isLastMessageFromInterviewer = formattedSpokenWord.includes(SPEAKER_LAST_TEXT)

            if (isLastMessageFromInterviewer)
                setTimeout(() => {
                    setIsRateBoxVisible(true)
                }, 3000)
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

    useEffect(() => {
        if (transcriptRef.current) {
            transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
        }
    }, [espelloTranscript]);

    return (
        <div className="chat-bot-container-main-transcript">
            <div className="chat-bot-container-main-transcript-content" ref={transcriptRef}>
                <p dangerouslySetInnerHTML={{ __html: espelloTranscript }}></p>
            </div>
        </div>
    );
};

export default Question;
