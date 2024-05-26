import React, { createContext, useEffect, useState } from 'react';
import './index.css';
import ChatHeader from "./ChatHeader";
import ChatContainer from "./ChatContainer";
import { Thread } from '../../../model/Thread';
import { ConversationTurn } from '../../../model/ConversationTurn';
import { ConversationTurnContextModel } from '../../../model/ConversationTurnContextModel';
import { SERVICE_URL_JAVA, SERVICE_URL_PYTHON, SPEAKER_INITIAL_TEXT } from '../../../util/AppConstants';
import { SessionTranscript } from '../../../model/SessionTranscript';
import { Role } from '../../../model/Role';
import { useNavigate, useParams } from 'react-router-dom';
import { SessionAnalysis } from '../../../model/SessionAnalysis';
import Rate from '../Rate';

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

const saveAnalysis = async (sessionAnalysis: SessionAnalysis) => {

    console.log("API Called")
    try {
        const response = await fetch(`${SERVICE_URL_JAVA}/session/api/v1/saveAnalysis`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sessionAnalysis)
        });
        // Assuming the response is JSON data
        const result = await response.json();
        // Process the data as needed
        if (result.status === 'success') {
            console.log(result)
            return ;
        } else {
            console.error(result);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

const exitConversation = async (sessionId : string,sessionTranscript: SessionTranscript) => {
    try {
        const response = await fetch(`${SERVICE_URL_PYTHON}/analyze_results`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sessionTranscript)
        });
        // Assuming the response is JSON data
        let data = await response.json();
        console.log(data)
        let sessionAnalysis : SessionAnalysis = {
            sessionId,
            analysisParams : JSON.parse(data?.analysis).analysisParams 
        }

        console.log(sessionAnalysis)
        // Process the data as needed
        await saveAnalysis(sessionAnalysis);
    } catch (error) {
        console.error('Error:', error);
    }
}

const validateSessionId = async (sessionId: string | undefined) => {
    if (!sessionId) {
        return { status: 'failed', errorDescription: 'Session ID is missing' };
    }
    try {
        const response = await fetch(`${SERVICE_URL_JAVA}/session/api/v1/getSessionDetails?sessionId=${sessionId}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error validating session ID:', error);
        return { status: 'failed', errorDescription: 'An error occurred while validating session ID' };
    }
};

const UserInteract = () => {

    const [threadId, setThreadId] = useState<string>('');
    const [timerOut, setTimerOut] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [exitSessionFlag, setExitSessionFlag] = useState<boolean>(false);

    const { sessionId } = useParams();

    const navigate = useNavigate();

    const [sessionTranscript, setSessionTranscript] = useState<SessionTranscript>({ transcript: [{ role: Role.SPEAKER, text: SPEAKER_INITIAL_TEXT }] });

    const [conversationTurn, setConversationTurn] = useState<ConversationTurn>(ConversationTurn.IDLE);

    const changeConversationTurn = (turn: ConversationTurn) => {
        setConversationTurn(turn);
    };

    useEffect(() => {
        const validateAndFetchThread = async () => {
            const validationResult = await validateSessionId(sessionId);
            if (validationResult.status === 'success') {
                await fetchThread(setThreadId);
                setLoading(false); // Set loading to false once the thread is fetched
            } else {
                console.error(validationResult.errorDescription || 'Invalid session ID, Try creating new session');
                alert(validationResult.errorDescription || 'Invalid session ID, Try creating new session')
                navigate("/session/create-session");
            }
        };

        validateAndFetchThread();
    }, [sessionId, navigate]);

    useEffect(()=>{

        const exitSession = async () => {
            await exitConversation(sessionId as string,sessionTranscript);
        }

        if(exitSessionFlag)
            exitSession()

    },[exitSessionFlag])

    if (loading) {
        return (
        <div className="spinner-container">
            <div className="spinner"></div>
        </div>// Display loading indicator while validating session ID and fetching thread
        )
    }

    return (
        sessionId !== undefined  && !exitSessionFlag? <div className="chat-bot-container">
            <ChatHeader
                conversationContext={{ conversationTurn, changeConversationTurn } as ConversationTurnContextModel}
                setTimerOut={setTimerOut}
                setExitSessionFlag = {setExitSessionFlag}
            />
            <ChatContainer
                timerOut={timerOut}
                threadId={threadId}
                conversationContext={{ conversationTurn, changeConversationTurn } as ConversationTurnContextModel}
                sessionTranscript={sessionTranscript}
                setSessionTranscript={setSessionTranscript}
            />
        </div>:<Rate sessionId={sessionId}/>
    );
}

export default UserInteract;
