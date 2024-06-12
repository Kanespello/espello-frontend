import { SPEAKER_INITIAL_TEXT } from '../../../../../util/AppConstants';
import './index.css'

interface DisclaimerProps {
    setIsDialogVisible: React.Dispatch<React.SetStateAction<boolean>>;
    setInterviewerText: React.Dispatch<React.SetStateAction<string>>;
}

const cardsTop = [
    {
        main: "Format:",
        heading: ["Speak Your Answers"],
        content: "Respond verbally for clarity and accuracy. Edit your transcribed response using the text box."
    },
    {
        main: "_",
        heading: ["Single Session"],
        content: " Due to timed responses and no resume options, please complete the entire interview in one sitting."
    },
    {
        main: "_",
        heading: ["Timed Responses (90 seconds)"],
        content: "Your answer will be automatically recorded after the timer ends or when you submit it within 90 seconds."
    }
]

const cardsBottom = [
    {
        main: "Requirements:",
        heading: ["Use Google Chrome on PC", "Ensure working microphone", "Ensure stable internet"],
        content: ""
    },
    {
        main: "General:",
        heading: ["Sit in a quiet environment", "You’ll get a detailed report after interview"],
        content: ""
    },
    {
        main: "_",
        heading: [],
        content: ""
    }
]

const Disclaimer: React.FC<DisclaimerProps> = ({ setIsDialogVisible, setInterviewerText }) => {
    return (
        <div className="chat-bot-container-main-dialog-box">
            <div className="chat-bot-container-main-dialog-box-heading">Instructions</div>
            <div className="chat-bot-container-main-dialog-box-content">
                <div className='chat-bot-container-main-dialog-box-content-header'>
                    Welcome! This is an audio-based mock interview designed to assess your skills for your desired role.
                </div>
                <div className='chat-bot-container-main-dialog-box-content-main'>
                    <div className='chat-bot-container-main-dialog-box-content-main-top'>
                        <div className='chat-bot-container-main-dialog-box-content-main-top-content'>
                            {
                                cardsTop?.map((card) => (
                                    <div className='chat-bot-container-main-dialog-box-content-main-top-content-box'>

                                        <div className='chat-bot-container-main-dialog-box-content-main-top-heading' style={card.main === '_' ? { color: "var(--Dark-Grey, #1D1D1D)" } : {}}>{card.main}</div>
                                        <div className='chat-bot-container-main-dialog-box-content-main-top-content-box-heading'>
                                            <ul>
                                                {card.heading.map((value) => <li>{value}</li>)}
                                            </ul>
                                        </div>
                                        <div className='chat-bot-container-main-dialog-box-content-main-top-content-box-content'>
                                            {card.content}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='chat-bot-container-main-dialog-box-content-main-mid'>
                        Interview progress is not recoverable if interrupted technically.
                    </div>
                    <div className='chat-bot-container-main-dialog-box-content-main-top'>
                        <div className='chat-bot-container-main-dialog-box-content-main-top-content'>
                            {
                                cardsBottom?.map((card) => (
                                    <div className='chat-bot-container-main-dialog-box-content-main-top-content-box'>

                                        <div className='chat-bot-container-main-dialog-box-content-main-top-heading' style={card.main === '_' ? { color: "var(--Dark-Grey, #1D1D1D)" } : {}}>{card.main}</div>
                                        <div className='chat-bot-container-main-dialog-box-content-main-top-content-box-heading'>
                                            <ul>
                                                {card.heading.map((value) => <li style={value === '_' ? { color: "var(--Dark-Grey, #1D1D1D)" } : {}}>{value}</li>)}
                                            </ul>
                                        </div>
                                        <div className='chat-bot-container-main-dialog-box-content-main-top-content-box-content' style={card.content === '_' ? { color: "var(--Dark-Grey, #1D1D1D)" } : {}}>
                                            {card.content}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='chat-bot-container-main-dialog-box-content-footer'>
                    <div className='chat-bot-container-main-dialog-box-content-footer-heading'>We wish you the best of luck!</div>
                    <div className='chat-bot-container-main-dialog-box-content-footer-content'>Please note: This is a recorded interview. By proceeding, you acknowledge your consent to the recording.</div>
                </div>
            </div>
            <div className="chat-bot-container-main-dialog-box-button" onClick={() => {
                setIsDialogVisible(false);
                setInterviewerText(SPEAKER_INITIAL_TEXT);
            }}>I understand</div>
        </div>
    )
}

export default Disclaimer