import React, { FC } from "react";
import { ConversationTurnContextModel } from "../../../../model/ConversationTurnContextModel";
import { ConversationTurn } from "../../../../model/ConversationTurn";
import ChatHeaderTimer from "./ChatHeaderTimer";
import { SessionDetails } from "../../CreateSession";

interface ChatHeaderProps {
    conversationContext: ConversationTurnContextModel;
    sessionDetails: SessionDetails;
    setTimerOut: React.Dispatch<React.SetStateAction<boolean>>;
    setIsRateBoxVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatHeader: FC<ChatHeaderProps> = ({ conversationContext, sessionDetails, setTimerOut, setIsRateBoxVisible: setExitSessionFlag }) => {

    return (
        <div className="chat-bot-container-header">
            <div className="chat-bot-container-header-main">
                <div className="chat-bot-container-header-main-left">
                    <div className="chat-bot-container-header-main-left-content">
                        {`Session - ${sessionDetails?.role} Interview`}
                    </div>
                </div>
                {
                    conversationContext?.conversationTurn === ConversationTurn.INTERVIEWEE ?
                        <ChatHeaderTimer conversationContext={conversationContext}
                            setTimerOut={setTimerOut} />
                        :
                        <div className="chat-bot-container-header-main-centre">
                        </div>}
                <div className="chat-bot-container-header-main-right">
                    <div className="chat-bot-container-header-main-right-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                            fill="none">
                            <path d="M11.4988 11.5012L4.49728 4.49963" strokeWidth="1.00189"
                                strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.4988 4.49963L4.49728 11.5012" strokeWidth="1.00189"
                                strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="chat-bot-container-header-main-right-content" onClick={() => setExitSessionFlag(true)}>
                        Exit Interview
                    </div>
                </div>
            </div>
            <div className="chat-bot-container-header-separator"></div>
        </div>
    )

}

export default ChatHeader;