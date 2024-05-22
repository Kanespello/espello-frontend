import Question from "./Question";
import Loader from "./Loader";
import Answer from "./Answer";
import React, { FC, useState } from "react";
import { InterviewerResponse } from "../../../model/InterviewerResponse";
import { ConversationTurnContextModel } from "../../../model/ConversationTurnContextModel";
import { SERVICE_URL_PYTHON } from "../../../util/AppConstants";

export interface ChatContainerProps {
    timerOut: boolean;
    threadId: string;
    conversationContext: ConversationTurnContextModel
}

const ChatContainer: FC<ChatContainerProps> = ({ timerOut,threadId, conversationContext }) => {

    const [interviewerText, setInterviewerText] = useState<string>('');

    const sendIntervieweeResponse = async (intervieweeText: string) => {
        const url = `${SERVICE_URL_PYTHON}/process_text`;
        const data = {
            message: intervieweeText,
            thread_id: threadId
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

            // Handle response data here if needed
            const responseData = await response.json();
            const fetchedInterviewerText: InterviewerResponse = responseData;
            console.log(fetchedInterviewerText)
            setInterviewerText(fetchedInterviewerText.message);

        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="chat-bot-container-main">
            <Question
                interviewerText={interviewerText}
                setInterviewerText={setInterviewerText}
                conversationContext={conversationContext}
            />
            <Loader
                conversationContext={conversationContext} />
            <Answer
                timerOut={timerOut}
                sendIntervieweeResponse={sendIntervieweeResponse}
                conversationContext={conversationContext}
            />
            <div className="chat-bot-container-main-gradiant">

            </div>
        </div>
    )
}

export default ChatContainer;