import React, { FC, useContext } from "react";
import { ConversationTurn } from "../../../../model/ConversationTurn";
import { ConversationTurnContextModel } from "../../../../model/ConversationTurnContextModel";


interface LoaderProps {
    conversationContext: ConversationTurnContextModel
}

const Loader: FC<LoaderProps> = ({ conversationContext }) => {

    const { conversationTurn } = conversationContext

    return (
        <div className="chat-bot-container-main-icon">
            {conversationTurn === ConversationTurn.INTERVIEWER ?
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="62" viewBox="0 0 72 62" fill="none">
                    <g id="rect1">
                        <rect x="0.26123" y="12.0009" width="18" height="37.8383" rx="9" fill="#6E6E6E" />
                    </g>
                    <g id="rect2">
                        <rect x="26.7482" y="0.176437" width="18" height="61.4873" rx="9" fill="#6E6E6E" />
                    </g>
                    <g id="rect3">
                        <rect x="53.235" y="15.7847" width="18" height="30.2707" rx="9" fill="#6E6E6E" />
                    </g>
                </svg>
                :
                conversationTurn === ConversationTurn.INTERVIEWEE ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="62" viewBox="0 0 72 62" fill="none">
                        <g id="rect1">
                            <rect x="0.26123" y="12.0009" width="18" height="37.8383" rx="9" fill="#FF8371" />
                        </g>
                        <g id="rect2">
                            <rect x="26.7482" y="0.176437" width="18" height="61.4873" rx="9" fill="#FF8371" />
                        </g>
                        <g id="rect3">
                            <rect x="53.235" y="15.7847" width="18" height="30.2707" rx="9" fill="#FF8371" />
                        </g>
                    </svg>
                    :
                    conversationTurn === ConversationTurn.WAITING ?
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="72"
                            height="60" viewBox="0 0 72 18" fill="none">
                            <rect x="0.513153" width="18" height="18" rx="9" fill="#6E6E6E" style={{ animation: 'wave 2s infinite 0.25s ease-in-out alternate' }} />
                            <rect x="27" width="18" height="18" rx="9" fill="#6E6E6E" style={{ animation: 'wave 2s infinite 0.75s ease-in-out alternate' }} />
                            <rect x="53.4868" y="6.10352e-05" width="18" height="18" rx="9" fill="#6E6E6E" style={{ animation: 'wave 2s infinite 0.5s ease-in-out alternate' }} />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="72"
                            height="60" viewBox="0 0 72 18" fill="none">
                            <rect x="0.513153" width="18" height="18" rx="9" fill="#6E6E6E" />
                            <rect x="27" width="18" height="18" rx="9" fill="#6E6E6E" />
                            <rect x="53.4868" y="6.10352e-05" width="18" height="18" rx="9" fill="#6E6E6E" />
                        </svg>
            }
        </div>
    )
}

export default Loader;