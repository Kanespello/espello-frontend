import React from "react";

const ChatHeader = () =>{

    return (
        <div className="chat-bot-container-header">
            <div className="chat-bot-container-header-main">
                <div className="chat-bot-container-header-main-left">
                    <div className="chat-bot-container-header-main-left-content">
                        Session Header - Product interview
                    </div>
                </div>
                <div className="chat-bot-container-header-main-centre">
                    <div className="chat-bot-container-header-main-centre-1">90</div>
                    <div className="chat-bot-container-header-main-centre-2">seconds</div>
                </div>
                <div className="chat-bot-container-header-main-right">
                    <div className="chat-bot-container-header-main-right-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                             fill="none">
                            <path d="M11.4988 11.5012L4.49728 4.49963" stroke="#6E6E6E" strokeWidth="1.00189"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11.4988 4.49963L4.49728 11.5012" stroke="#6E6E6E" strokeWidth="1.00189"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className="chat-bot-container-header-main-right-content">
                        Exit Interview
                    </div>
                </div>
            </div>
            <div className="chat-bot-container-header-separator"></div>
        </div>
    )

}

export default ChatHeader;