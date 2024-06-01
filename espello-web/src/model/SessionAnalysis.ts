export interface SessionAnalysis {
    sessionId: string;
    caseTitle: string;
    summary: string;
    analysisParams: AnalysisParam[];
}

export interface AnalysisParam {
    analysisDetailTuple: AnalysisDetailTuple;
    subParamsAnalysisDetailTuple: AnalysisDetailTuple[];
}

export interface AnalysisDetailTuple {
    analysisParam: string;
    analysisParamDesc: string;
    analysisParamScore: number;
}