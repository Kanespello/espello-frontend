import React from 'react';
import './chat-bot.css'
import ChatHeader from "./ChatHeader";
import ChatContainer from "./ChatContainer";

const UserInteract = () => {

    return (<div className="chat-bot-container">
            <ChatHeader/>
            <ChatContainer/>
        </div>);
}

export default UserInteract;
