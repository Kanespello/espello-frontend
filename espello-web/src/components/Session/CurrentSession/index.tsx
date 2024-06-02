import React, { createContext, useEffect, useState } from 'react';
import './index.css';
import ChatHeader from "./ChatHeader";
import ChatContainer from "./ChatContainer";
import { ConversationTurn } from '../../../model/ConversationTurn';
import { ConversationTurnContextModel } from '../../../model/ConversationTurnContextModel';
import { SPEAKER_INITIAL_TEXT } from '../../../util/AppConstants';
import { SessionTranscript } from '../../../model/SessionTranscript';
import { Role } from '../../../model/Role';
import { useNavigate, useParams } from 'react-router-dom';
import Rate from '../Rate';
import { exitConversation, validateSessionId } from './util';
import { SessionAnalysis } from '../../../model/SessionAnalysis';
import Summary from '../Summary';
import { PATH_CREATE_SESSION } from '../../../util/SiteRoutes';
import { SessionDetails } from '../CreateSession';

const initialConversationTurn: ConversationTurnContextModel = {
    conversationTurn: ConversationTurn.WAITING,
    changeConversationTurn: (turn: ConversationTurn) => { }
} as ConversationTurnContextModel;

export const ConversationTurnContext = createContext(initialConversationTurn);

const CurrentSession = () => {

    const [timerOut, setTimerOut] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    const [isCurrentSessionChatVisible, setIsCurrentSessionChatVisible] = useState<boolean>(true);
    const [isRateBoxVisible, setIsRateBoxVisible] = useState<boolean>(false);
    const [isSummaryPageVisible, setIsSummaryPageVisible] = useState<boolean>(false);

    const { sessionId } = useParams();

    const navigate = useNavigate();

    const [sessionTranscript, setSessionTranscript] = useState<SessionTranscript>({ transcript: [{ role: Role.SPEAKER, text: SPEAKER_INITIAL_TEXT }] });
    const [sessionAnalysis, setSessionAnalysis] = useState<SessionAnalysis>({ ...{} as SessionAnalysis, sessionId: sessionId as string })
    const [conversationTurn, setConversationTurn] = useState<ConversationTurn>(ConversationTurn.IDLE);
    const [sessionDetails, setSessionDetails] = useState<SessionDetails>({} as SessionDetails);

    const changeConversationTurn = (turn: ConversationTurn) => {
        setConversationTurn(turn);
    };

    useEffect(() => {
        const validateAndFetchThread = async () => {
            const validationResult = await validateSessionId(sessionId);
            if (validationResult.status === 'success') {
                setLoading(false); // Set loading to false once the thread is fetched
                setSessionDetails(validationResult?.data?.sessionDetails)
            } else {
                console.error(validationResult.errorDescription || 'Invalid session ID, Try creating new session');
                alert(validationResult.errorDescription || 'Invalid session ID, Try creating new session')
                navigate(PATH_CREATE_SESSION);
            }
        };

        validateAndFetchThread();
    }, [sessionId, navigate]);

    useEffect(() => {
        const exitSession = async () => {
            setIsCurrentSessionChatVisible(false);
            const tempSessionAnalysis = await exitConversation(sessionId as string);
            setSessionAnalysis(tempSessionAnalysis);
        }

        if (isRateBoxVisible)
            exitSession()

    }, [isRateBoxVisible])

    if (loading) {
        return (
            <div className="spinner-container">
                <div className="spinner"></div>
            </div>// Display loading indicator while validating session ID and fetching thread
        )
    }

    return (
        <React.Fragment>
            {(sessionId !== undefined && isCurrentSessionChatVisible ? (
                <div className="chat-bot-container">
                    <ChatHeader
                        conversationContext={{ conversationTurn, changeConversationTurn } as ConversationTurnContextModel}
                        setTimerOut={setTimerOut}
                        setIsRateBoxVisible={setIsRateBoxVisible}
                        sessionDetails={sessionDetails}
                    />
                    <ChatContainer
                        timerOut={timerOut}
                        conversationContext={{ conversationTurn, changeConversationTurn } as ConversationTurnContextModel}
                        sessionTranscript={sessionTranscript}
                        session_id={sessionId}
                        setSessionTranscript={setSessionTranscript}
                        setIsRateBoxVisible={setIsRateBoxVisible}
                    />
                </div>
            ) : <></>)}
            {(sessionId !== undefined && isRateBoxVisible ? (
                <Rate sessionId={sessionId} setIsRateBoxVisible={setIsRateBoxVisible} setIsSummaryPageVisible={setIsSummaryPageVisible} />
            ) : <></>)}
            {(sessionId !== undefined && isSummaryPageVisible ? (
                <Summary sessionAnalysis={sessionAnalysis} />
            ) : <></>)}
        </React.Fragment>
    )
}

export default CurrentSession;
