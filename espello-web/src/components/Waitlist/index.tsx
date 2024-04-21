import { FC } from "react"

const Waitlist = () => {
    return (
        <div className="w">
            <div className="waitlist">
                <div className="waitlist-frame">
                    <div className="waitlist-frame-input">
                        <input className="waitlist-frame-input-content" placeholder="name@example.com"></input>
                    </div>
                    <div className="waitlist-frame-button">
                        <div className="waitlist-frame-button-logo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M12.5625 5.74976L19.3125 12.4998L12.5625 19.2498" stroke="#FF8371" stroke-width="1.50251" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.375 12.4999H4.6875" stroke="#FF8371" stroke-width="1.50251" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="waitlist-frame-button-content">
                            send
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Waitlist