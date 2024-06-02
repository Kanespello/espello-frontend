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

    const [transcriptHTML, setTranscriptHTML] = useState<string>('');
    const transcriptRef = useRef<HTMLParagraphElement>(null);

    // Formats the transcript text with HTML markup for styling
    const formatTranscript = (transcript: string): string => {
        return transcript
            .replace(/\*\*(.*?)\*\*/g, '<i><strong>$1</strong></i>') // Bold the text between **
            .replace(/(\d\.\s\*\*[^:]+\*\*[^.]+\.)/g, '$1<br><br>') // Add line breaks after each strategy
            .replace(/\n/g, '<br>'); // Ensure newlines are converted to <br> tags
    };

    // Speaks the interviewer text using speech synthesis
    const speakInterviewerText = (text: string): void => {
        conversationContext?.changeConversationTurn(ConversationTurn.INTERVIEWER);

        const utterance: SpeechSynthesisUtterance = new window.SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 1;

        // Callback function when each word is spoken
        utterance.onboundary = (event: SpeechSynthesisEvent): void => {
            const spokenText: string = text.slice(0, event.charIndex + event.charLength);
            const formattedSpokenText = formatTranscript(spokenText);
            setTranscriptHTML(formattedSpokenText);

            // Check if it's the last message from the interviewer
            const isLastMessageFromInterviewer = formattedSpokenText.includes(SPEAKER_LAST_TEXT)

            if (isLastMessageFromInterviewer) {
                // Show rate box after 3 seconds if it's the last message
                setTimeout(() => {
                    setIsRateBoxVisible(true);
                }, 3000);
            }
        };

        // Callback function when speech synthesis ends
        utterance.onend = () => {
            conversationContext?.changeConversationTurn(ConversationTurn.INTERVIEWEE);
        };

        // Start speech synthesis
        window.speechSynthesis.speak(utterance);
    };

    useEffect(() => {
        // Speak the interviewer text when it changes
        if (interviewerText.length > 0) {
            speakInterviewerText(interviewerText);
        }

        // Cleanup function
        return () => {
            // Cancel speech synthesis when component unmounts
            window.speechSynthesis.cancel();
        };
    }, [interviewerText]);

    useEffect(() => {
        // Scroll to the bottom of the transcript when it updates
        if (transcriptRef.current) {
            transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
        }
    }, [transcriptHTML]);

    return (
        <div className="chat-bot-container-main-transcript">
            <div className="chat-bot-container-main-transcript-content" ref={transcriptRef}>
                {/* Render the transcript with HTML markup */}
                <p dangerouslySetInnerHTML={{ __html: transcriptHTML }}></p>
            </div>
        </div>
    );
};

export default Question;