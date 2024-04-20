import Question from "./Question";
import Loader from "./Loader";
import Answer from "./Answer";
import React, { FC, useEffect, useState } from "react";
import { InterviewerResponse } from "../../../model/InterviewerResponse";
import { ConversationTurnContextModel } from "../../../model/ConversationTurnContextModel";

export interface ChatContainerProps {
    threadId: string;
    conversationContext: ConversationTurnContextModel
}


const ChatContainer: FC<ChatContainerProps> = ({ threadId, conversationContext}) => {

    const [interviewerText, setInterviewerText] = useState<string>('');

    useEffect(()=>{
        setInterviewerText('Hi. Can you please introduce yourself? Maybe tell about your work experience.')
    },[])


    const sendIntervieweeResponse = async (intervieweeText: string) => {
        const url = 'https://espello.co/python_service/process_text';
        const data = {
            message: intervieweeText,
            thread_id: threadId
        };
        console.log(intervieweeText)

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
                threadId={threadId}
                interviewertext={interviewerText}
                setInterviewerText={setInterviewerText}

                conversationContext={conversationContext}
            />
            <Loader
                conversationContext={conversationContext} />
            <Answer
                sendIntervieweeResponse={sendIntervieweeResponse}
                conversationContext={conversationContext}
            />
            <div  className="chat-bot-container-main-gradiant">

            </div>
        </div>
    )
}

export default ChatContainer;