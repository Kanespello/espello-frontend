import React, { createContext, useEffect, useState } from 'react';
import './chat-bot.css';
import ChatHeader from "./ChatHeader";
import ChatContainer from "./ChatContainer";
import { Thread } from '../../model/Thread';
import { ConversationTurn } from '../../model/ConversationTurn';
import { ConversationTurnContextModel } from '../../model/ConversationTurnContextModel';
import { SERVICE_URL_PYTHON } from '../../util/AppConstants';

const initialConversationTurn: ConversationTurnContextModel = {
    conversationTurn: ConversationTurn.WAITING,
    changeConversationTurn: (turn: ConversationTurn) => { }
} as ConversationTurnContextModel;

export const ConversationTurnContext = createContext(initialConversationTurn);

const fetchThread = async (setThreadId: (id: string) => void) => {
    try {
        const response: Response = await fetch(`${SERVICE_URL_PYTHON}/create_thread`);
        const data: Thread = await response.json();
        const fetchedThreadId = data?.thread_id;
        setThreadId(fetchedThreadId);
    } catch (error) {
        console.error('Error fetching thread:', error);
        throw error;
    }
};

const UserInteract = () => {
    const [threadId, setThreadId] = useState<string>('');
    const [timerOut, setTimerOut] = useState<boolean>(false);
    const [conversationTurn, setConversationTurn] = useState<ConversationTurn>(ConversationTurn.IDLE);

    const changeConversationTurn = (turn: ConversationTurn) => {
        setConversationTurn(turn);
    };

    useEffect(() => {
        fetchThread(setThreadId);
    }, []);

    return (
        <div className="chat-bot-container">
            <ChatHeader
                conversationContext={{ conversationTurn, changeConversationTurn } as ConversationTurnContextModel}
                setTimerOut={setTimerOut}
            />
            <ChatContainer
                timerOut = {timerOut}
                threadId={threadId}
                conversationContext={{ conversationTurn, changeConversationTurn } as ConversationTurnContextModel}
            />
        </div>
    );
}

export default UserInteract;
