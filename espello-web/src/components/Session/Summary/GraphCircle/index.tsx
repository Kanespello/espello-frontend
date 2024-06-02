import { getPath, getPath2 } from "../../../../util/Util";
import './index.css'

interface GraphCircleProps {
    value: number;
}
const GraphCircle: React.FC<GraphCircleProps> = ({ value }) => {
    return (
        <div className="session-summary-inner-summary-main-left">
            <div className="session-summery-inner-summary-main-left-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <path d={getPath(10)} fill="#121212" />
                </svg>
                <svg style={{ position: "absolute", left: "1px", top: "1px" }} xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78" fill="none">
                    <path d={getPath(value)} fill="#FF8371" />
                </svg>
                {/* <svg style={{ position: "absolute", left: "13px", top: "13px" }} xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                    <path d={getPath2(7)} fill="#7FD1AE" />
                </svg> */}
            </div>
        </div>
    )
}

export default GraphCircle;