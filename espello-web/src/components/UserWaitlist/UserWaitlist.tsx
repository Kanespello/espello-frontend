import { FC } from "react"
import Header from "../Header";

const UserWaitlist=()=>{

    const scrollFunc=()=>{}

	return (
        <div className="w">
        	<Header scrollToCompnent={scrollFunc} enableOtherButtons = {false}/>
            <p>Hi there</p>
        </div>

    )
}

export default UserWaitlist