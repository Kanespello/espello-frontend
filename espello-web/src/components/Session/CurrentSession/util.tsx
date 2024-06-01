import { SessionAnalysis } from "../../../model/SessionAnalysis";
import { SERVICE_URL_JAVA, SERVICE_URL_PYTHON } from "../../../util/AppConstants";

export const fetchThread = async (sessionId: string) => {
    try {
        const response: Response = await fetch(`${SERVICE_URL_PYTHON}/create_thread`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ session_id: sessionId })
        });

        if (!response.ok) {
            console.error(`HTTP error! status: ${response.status}`);
            return;
        }

        const result = await response.json();
        if (result.status === 'success') {
            console.log(result);
        } else {
            console.error(result);
        }

    } catch (error) {
        console.error('Error fetching thread:', error);
        throw error;
    }
};

export const exitConversation = async (sessionId: string) => {
    let sessionAnalysis: SessionAnalysis = { ...{} as SessionAnalysis, sessionId: sessionId as string }

    try {
        const response: Response = await fetch(`${SERVICE_URL_PYTHON}/analyze_results`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ session_id: sessionId })
        });

        const result = await response.json();

        if (result.status === 'success') {
            sessionAnalysis = {
                sessionId,
                analysisParams: result?.analysisParams || [],
                caseTitle: result?.caseTitle,
                summary: result?.summary
            };

            return sessionAnalysis;
        } else {
            console.error(result);
            return sessionAnalysis;
        }

    } catch (error) {
        console.error('Error:', error);
        return sessionAnalysis;
    }
};




export const validateSessionId = async (sessionId: string | undefined) => {
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