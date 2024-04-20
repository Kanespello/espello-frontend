import './index.css'

const WhatWeDo = () => {
    return (
        <div className="box-2">
            <div className="box-2-media">
                <div className="box-2-media-left">
                    <video width="560" height="315" controls>
                        <source src={"/videos/espello_demo.mp4"} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="box-2-media-right">
                    <div className="box-2-media-right-heading">
                        Watch how
                        <br/>
                        it works
                    </div>
                    <div className="box-2-media-right-content">
                    Here’s a detailed walkthrough video
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo;