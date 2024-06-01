import Question from "./Question";
import Loader from "./Loader";
import Answer from "./Answer";
import React, { FC, SetStateAction, useState } from "react";
import { InterviewerResponse } from "../../../../model/InterviewerResponse";
import { ConversationTurnContextModel } from "../../../../model/ConversationTurnContextModel";
import { SERVICE_URL_PYTHON, SPEAKER_LAST_TEXT } from "../../../../util/AppConstants";
import Disclaimer from "./Disclaimer";
import { SessionTranscript } from "../../../../model/SessionTranscript";
import { Transcript } from "../../../../model/Transcript";
import { Role } from "../../../../model/Role";
import { ConversationTurn } from "../../../../model/ConversationTurn";

export interface ChatContainerProps {
    timerOut: boolean;
    session_id: string;
    conversationContext: ConversationTurnContextModel;
    sessionTranscript: SessionTranscript;
    setSessionTranscript: React.Dispatch<SetStateAction<SessionTranscript>>;
    setIsRateBoxVisible: React.Dispatch<SetStateAction<boolean>>;
}

const ChatContainer: FC<ChatContainerProps> = ({ timerOut, session_id, conversationContext, sessionTranscript, setIsRateBoxVisible, setSessionTranscript }) => {

    const [interviewerText, setInterviewerText] = useState<string>('');
    const [isDialogVisible, setIsDialogVisible] = useState<boolean>(true);

    const addSessionTranscript = (role: Role, text: string) => {

        const intervieweeTranscript: Transcript = { role, text };
        const tempTranscript: Transcript[] = sessionTranscript?.transcript as Transcript[];

        tempTranscript?.push(intervieweeTranscript);

        const tempSessionTranscript: SessionTranscript = { transcript: tempTranscript }

        setSessionTranscript(tempSessionTranscript);
    }

    const sendIntervieweeResponse = async (intervieweeText: string) => {

        conversationContext?.changeConversationTurn(ConversationTurn.WAITING);
        //adding session transcript for interviewee
        addSessionTranscript(Role.INTERVIEWEE, intervieweeText);

        const url = `${SERVICE_URL_PYTHON}/process_text`;
        const data = {
            message: intervieweeText,
            session_id: session_id
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            const fetchedInterviewerText: InterviewerResponse = responseData;
            const interviewerResponse: string = fetchedInterviewerText.message;

            setInterviewerText(interviewerResponse);

            //adding session transcript for interviewer
            addSessionTranscript(Role.SPEAKER, interviewerResponse);

        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="chat-bot-container-main">
            {isDialogVisible ?
                <Disclaimer setInterviewerText={setInterviewerText} setIsDialogVisible={setIsDialogVisible} /> :
                <React.Fragment>
                    <Question
                        interviewerText={interviewerText}
                        conversationContext={conversationContext}
                        setIsRateBoxVisible={setIsRateBoxVisible}
                    />
                    <Loader
                        conversationContext={conversationContext} />
                    <Answer
                        timerOut={timerOut}
                        sendIntervieweeResponse={sendIntervieweeResponse}
                        conversationContext={conversationContext}
                    />
                    <div className={isDialogVisible ? "chat-bot-container-main-gradiant-dialog-open" : "chat-bot-container-main-gradiant-dialog-close"}>

                    </div>
                </React.Fragment>}
        </div>
    )
}

export default ChatContainer;