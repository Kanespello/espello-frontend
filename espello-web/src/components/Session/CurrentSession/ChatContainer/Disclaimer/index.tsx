import { SPEAKER_INITIAL_TEXT } from '../../../../../util/AppConstants';
import './index.css'

interface DisclaimerProps {
    setIsDialogVisible: React.Dispatch<React.SetStateAction<boolean>>;
    setInterviewerText: React.Dispatch<React.SetStateAction<string>>;
}

const Disclaimer: React.FC<DisclaimerProps> = ({ setIsDialogVisible, setInterviewerText }) => {
    return (
        <div className="chat-bot-container-main-dialog-box">
            <div className="chat-bot-container-main-dialog-box-heading">Instructions</div>
            <div className="chat-bot-container-main-dialog-box-content">
                <ul>
                    <li>This video assessment consists of 5 question(s) and should take you 10 minutes to complete, depending on the number of questions you are assigned.</li>
                    <li>You are required to complete your assessment within a single sitting.</li>
                    <li>Please upload the right identification documents as mandated (Govt ID etc.)</li>
                    <li>Once you are presented with your first question, an automated timer starts. You will be given a preparation time of 45 seconds , followed by a recording time limit that may vary for each question.</li>
                    <li>Remember to keep track of the timer while preparing or recording your response. Should you find yourself ready before the time limit, you can choose to either start recording your responses or to submit them beforehand.</li>
                </ul>
            </div>
            <div className="chat-bot-container-main-dialog-box-button" onClick={() => {
                setIsDialogVisible(false);
                setInterviewerText(SPEAKER_INITIAL_TEXT);
            }}>Got it</div>
        </div>
    )
}

export default Disclaimer