import './index.css'

const WhatWeDo = () => {
    const videoId = 'LUVxxZRfF4I'
    return (
        <div className="box-2">
            <div className="box-2-media">
                <div className="box-2-media-left">
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                        allowFullScreen
                    />
                </div>
                <div className="box-2-media-right">
                    <div className="box-2-media-right-heading">
                        Watch how
                        <br />
                        it works
                    </div>
                    <div className="box-2-media-right-content">
                        Here’s a detailed walkthrough video
                    </div>
                </div>
            </div>
            <div className='box-2-content-1'>
                <div className='box-2-content-1-1'>
                    <div className='box-2-content-1-1-1'>Full-length case interviews with</div>
                    <div className='box-2-content-1-1-2'>Espello AI</div>
                </div>
                <div className='box-2-content-1-2'></div>
                <ul className='box-2-content-1-3'>
                    <li className='box-2-content-1-3-1'>Be confident with your visible progress</li>
                    <li className='box-2-content-1-3-2'>No unnecessary certificates</li>
                    <li className='box-2-content-1-3-3'>No extra content to watch</li>
                </ul>
            </div>
            <div className='box-2-content-2'>
                <div className='box-2-content-2-1'>Get Industry specific detailed analysis </div>
                <div className='box-2-content-2-2'>
                    <div className='box-2-content-2-2-1'></div>
                    <div className='box-2-content-2-2-2'>on</div>
                    <div className='box-2-content-2-2-3'></div>
                </div>
                <div className='box-2-content-2-3'>
                    <div className='box-2-content-2-3-content'>Communication Skills Analytical Thinking Problem Solving Business Acumen</div>
                </div>
            </div>
            <div className='box-2-content-3'>
                <div className='box-2-content-3-1'>
                    <div className='box-2-content-3-1-1'>as of now,</div>
                    <div className='box-2-content-3-1-2'>We only support a few roles</div>
                </div>
                <div className='box-2-content-3-2'>
                    <div className='box-2-content-3-2-content'>
                        <div className='box-2-content-3-2-content-button'>Product</div>
                    </div>
                    <div className='box-2-content-3-2-content'>
                        <div className='box-2-content-3-2-content-button'>Consulting</div>
                    </div>
                    <div className='box-2-content-3-2-content'>
                        <div className='box-2-content-3-2-content-button'>Strategy</div>
                    </div>
                </div>
                <div className='box-2-content-3-3'>

                </div>
            </div>
        </div>
    )
}

export default WhatWeDo;