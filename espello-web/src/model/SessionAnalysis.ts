export interface SessionAnalysis{
    sessionId : string;
    analysisParams : AnalysisParam[];
}

export interface AnalysisParam{
    analysisDetailTuple : AnalysisDetailTuple;
    subParamsAnalysisDetailTuple : AnalysisDetailTuple[];
}

export interface AnalysisDetailTuple{
    analysisParam : string;
    analysisParamDesc : string;
    analysisParamScore : number;
}