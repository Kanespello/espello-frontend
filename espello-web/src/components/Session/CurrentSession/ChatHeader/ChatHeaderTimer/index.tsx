import React, { useState, useEffect } from 'react';
import { ConversationTurnContextModel } from '../../../../../model/ConversationTurnContextModel';
import { ConversationTurn } from '../../../../../model/ConversationTurn';

interface ChatHeaderTimerProps {
    conversationContext: ConversationTurnContextModel
    setTimerOut:React.Dispatch<React.SetStateAction<boolean>>;
}


const ChatHeaderTimer: React.FC<ChatHeaderTimerProps> = ({ conversationContext ,setTimerOut}) => {
    const [seconds, setSeconds] = useState(90);

    useEffect(() => {
        if (seconds === 0) {
            conversationContext?.changeConversationTurn(ConversationTurn.WAITING);
            setTimerOut(true);
        }
        else
        setTimerOut(false);

        const interval = setInterval(() => {
            // Decrease the number of seconds every second
            setSeconds(prevSeconds => Math.max(prevSeconds - 1, 0)); // Ensure seconds doesn't go below 0
        }, 1000); // Run every second

        // Clear interval when component unmounts or when timer reaches 0
        return () => clearInterval(interval);
    }, [seconds]); // Re-run effect whenever 'seconds' changes

    return (
        <div className="chat-bot-container-header-main-centre">
            <div className="chat-bot-container-header-main-centre-1">{seconds}</div>
            <div className="chat-bot-container-header-main-centre-2">seconds</div>
        </div>
    );
};

export default ChatHeaderTimer;
