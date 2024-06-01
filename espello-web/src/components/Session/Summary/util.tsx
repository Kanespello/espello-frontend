import { AnalysisParam } from "../../../model/SessionAnalysis";

export const DownloadLogo: JSX.Element = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M10.4955 5.4978H11.7458C12.0774 5.4978 12.3954 5.62953 12.6299 5.864C12.8643 6.09847 12.9961 6.41648 12.9961 6.74807V13.2495C12.9961 13.5811 12.8643 13.8991 12.6299 14.1336C12.3954 14.368 12.0774 14.4998 11.7458 14.4998H4.24417C3.91258 14.4998 3.59456 14.368 3.36009 14.1336C3.12562 13.8991 2.9939 13.5811 2.9939 13.2495V6.74807C2.9939 6.41648 3.12562 6.09847 3.36009 5.864C3.59456 5.62953 3.91258 5.4978 4.24417 5.4978H5.49444" stroke-width="1.00189" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5.49341 8.49829L7.99431 10.9992L10.4952 8.49829" stroke-width="1.00189" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7.99451 1.49695V10.4989" stroke-width="1.00189" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
)

export const calculateSummaryRating = (analysisParams: AnalysisParam[]) => {
    const length = analysisParams?.length || 1;

    return analysisParams?.reduce((currentSum, analysisParam) => {
        return currentSum + (analysisParam?.analysisDetailTuple?.analysisParamScore || 0);
    }, 0) / length;
};