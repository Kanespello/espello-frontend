import React, {useEffect, useState} from "react";
import {Transcript} from "../../../../model/Transcript";

const Question = () => {
    const [espelloTranscript, setEspelloTranscript] = useState<string>('');

    const sessionId = "21-1712600727158-85mxr";

    useEffect(() => {
        const fetchTranscript = async (): Promise<string> => {
            try {
                const response: Response = await fetch('http://20.193.152.154:9033/session/api/v1/getTranscript?sessionId=' + sessionId);
                const data: Transcript = await response.json();
                return data?.data?.conversationTuples[0]?.interviewerText;
            } catch (error) {
                console.error('Error fetching transcript:', error);
                throw error;
            }
        };

        const callSpeakSynthesiser = (transcript: string): void => {
            const utterance: SpeechSynthesisUtterance = new window.SpeechSynthesisUtterance(transcript);
            utterance.lang = 'en-US';
            utterance.rate = 0.8;

            utterance.onboundary = (event: SpeechSynthesisEvent): void => {
                const spokenWord: string = transcript.slice(0, event.charIndex + event.charLength);
                setEspelloTranscript(spokenWord);
            };

            utterance.onend = () => {
                alert('You have 90sec to answer!');
            };

            window.speechSynthesis.speak(utterance);
        };

        fetchTranscript().then(callSpeakSynthesiser).catch((err) => console.log(err));

        return () => {
            window.speechSynthesis.cancel(); // Cancel speech synthesis when component unmounts
        };
    }, []);

    return (<div className="chat-bot-container-main-transcript">
        <div className="chat-bot-container-main-transcript-content">
            <p>{espelloTranscript}</p>
        </div>
    </div>)
};

export default Question;
