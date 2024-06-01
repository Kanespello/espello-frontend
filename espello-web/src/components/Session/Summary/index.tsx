import { useEffect, useState } from "react";
import { AnalysisParam, SessionAnalysis } from "../../../model/SessionAnalysis"
import GraphCircle from "./GraphCircle"
import './index.css'
import { DownloadLogo, calculateSummaryRating, sessionAnalysis } from "./util"


export interface SummaryProps {
    sessionAnalysis: SessionAnalysis;
}
const Summary: React.FC<SummaryProps> = ({ sessionAnalysis }) => {

    const [analysisParams, setAnalysisParams] = useState<AnalysisParam[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {

        const tempAnalysisParams = sessionAnalysis?.analysisParams;

        if (tempAnalysisParams.length > 0) {
            setAnalysisParams(tempAnalysisParams)
            setLoading(false)
        }

    }, [sessionAnalysis])
    

    if (loading) {
        return (
            <div className="spinner-container">
                <div className="spinner"></div>
            </div>// Display loading indicator while validating session ID and fetching thread
        )
    }

    return (
        <div className="session-summary-container">
            <div className="session-summary-inner">
                <div className="session-summary-inner-header">
                    <div className="session-summary-inner-header-review">Session Review</div>
                    <Button content={"Download transcript"} logo={DownloadLogo} onClick={() => { }} />
                    <Button content={"Download Session report"} logo={DownloadLogo} onClick={() => { }} />
                </div>
                <div className="session-summary-inner-summary">
                    <div className="session-summary-inner-summary-main">
                        <div className="session-summary-inner-summary-main-inner">
                            <div className="session-summary-inner-summary-main-inner-inner">
                                <GraphCircle value={calculateSummaryRating(analysisParams)} />
                                <div className="session-summary-inner-summary-main-right">
                                    <div className="session-summary-inner-summary-main-right-heading">Case summary</div>
                                    <div className="session-summary-inner-summary-main-right-content">{
                                        analysisParams.map((data) => <span>{data?.analysisDetailTuple?.analysisParamDesc + " "}</span>)
                                    } </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="session-summary-inner-summary-secondary">
                        <div className="session-summary-inner-summary-secondary-inner">
                            {renderRows(analysisParams)}
                        </div>
                    </div>
                </div>
                <div className="session-summary-inner-route">
                    <div className="session-summary-inner-route-button">
                        <div className="session-summary-inner-route-button-content">
                            Go to detailed report
                        </div>
                        <div className="session-summary-inner-route-button-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M5.74695 3.50073L10.2479 8.00171L5.74695 12.5027" stroke-width="1.00189" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

const renderRows = (values: AnalysisParam[]) => {
    const rows = [];
    let index = 0;

    while (index < values.length) {
        rows.push(
            <div className="session-summary-inner-summary-secondary-inner-row" key={`row-${index}`}>
                {values.slice(index, index + 3).map((value, i) => (
                    <div className="session-summary-inner-summary-secondary-inner-row-card" key={`card-${index + i}`}>
                        <div className="session-summary-inner-summary-secondary-inner-row-card-inner">
                            <GraphCircle value={value?.analysisDetailTuple?.analysisParamScore} />
                            <div className="session-summary-inner-summary-secondary-inner-row-card-inner-content">{value?.analysisDetailTuple?.analysisParam}</div>
                        </div>
                    </div>
                ))}
            </div>
        );
        index += 3;
    }

    return rows;
};

interface ButtonProps {
    content: string;
    logo: JSX.Element;
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ content, logo, onClick }) => {
    return (
        <div className="session-summary-inner-header-button">
            <div className="session-summary-inner-header-button-logo">
                {logo}
            </div>
            <div className="session-summary-inner-header-button-content">{content}</div>
        </div>
    )
}
export default Summary;