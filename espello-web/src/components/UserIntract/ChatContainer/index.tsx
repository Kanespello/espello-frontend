import Question from "./Question";
import Loader from "./Loader";
import Answer from "./Answer";
import React from "react";

const ChatContainer = () =>{
    return (
        <div className="chat-bot-container-main">
            <Question/>
            <Loader/>
            <Answer/>
        </div>
    )
}

export default ChatContainer;