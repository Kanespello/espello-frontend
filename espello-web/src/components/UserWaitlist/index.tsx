import { FC } from "react";
import Header from "../Header";
import './index.css'

const UserWaitlist = () => {
    const scrollFunc = () => {}

    return (
        <div className="w">
            <Header scrollToCompnent={scrollFunc} enableOtherButtons={false} />

            <div className="user-waitlist-frame-input">
                
                <input className="user-waitlist-frame-input-content" placeholder="name@example.com"></input>

            </div>
        </div>



    );
}

export default UserWaitlist;
