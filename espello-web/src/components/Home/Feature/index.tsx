import React from "react";
import './index.css'
import { useNavigate } from "react-router-dom";

const FeatureComponent = () => {

    const navigate = useNavigate();

    const onClickUserWaitlist = () => {
        navigate('/user-waitlist');
    };

    return (
        <React.Fragment>
            <div className="box-1">
                <div className="box-1-inner-top">
                    <div className="box-1-inner-top-inner">
                        <div className="box-1-inner-top-inner-top">
                            <div className="box-1-inner-top-inner-top-1">
                                <div className="box-1-inner-top-inner-top-1-1">
                                    Supercharge interview prep
                                </div>
                                <div className="box-1-inner-top-inner-top-1-2">
                                    <div className="box-1-inner-top-inner-top-1-2-1">
                                        with
                                    </div>
                                    <div className="box-1-inner-top-inner-top-1-2-2">
                                        <div className="box-1-inner-top-inner-top-1-2-2-content">
                                            Espello
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box-1-inner-top-bottom">
                        <div className="box-1-inner-top-bottom-1">
                            <div className="box-1-inner-top-bottom-1-content" onClick={onClickUserWaitlist}>
                                Join the Waitlist
                            </div>
                        </div>
                        <div className="box-1-inner-top-bottom-2">
                        </div>
                    </div>
                </div>
                <div className="box-1-inner-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        viewBox="0 0 16 16" fill="none">
                        <path d="M3.49994 5.75131L8.00092 10.2523L12.5019 5.75131" stroke="#6E6E6E" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            <div className="box-2">
                <div className="box-2-top">
                    <div className="box-2-top-1">ESPELLO</div>
                    <div className="box-2-top-2">Your AI-Powered Interview Wingman</div>
                    <div className="box-2-top-3"></div>
                </div>
                <div className="box-2-bottom">
                    <div className="box-2-bottom-card">
                        <div className="box-2-bottom-card-image">
                            <svg xmlns="http://www.w3.org/2000/svg" width="102" height="101" viewBox="0 0 102 101" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M83.5726 2.74206C83.4187 2.12184 83.1029 1.55363 82.6573 1.09556C82.2118 0.637494 81.6525 0.306007 81.0368 0.135016C80.4211 -0.0359754 79.771 -0.0403328 79.1531 0.122389C78.5351 0.285112 77.9715 0.609072 77.5198 1.06113L63.0913 15.4897C62.6512 15.9307 62.3329 16.4781 62.1673 17.0786C62.0017 17.6791 61.9944 18.3123 62.1462 18.9165L64.7433 29.3339C64.7092 29.3671 64.6755 29.4008 64.6423 29.4349L47.393 46.6843C46.4372 47.71 45.9169 49.0666 45.9416 50.4683C45.9664 51.8701 46.5342 53.2075 47.5256 54.1988C48.5169 55.1902 49.8543 55.758 51.2561 55.7827C52.6578 55.8075 54.0144 55.2872 55.0401 54.3314L72.3039 37.0893C72.338 37.0536 72.3717 37.0176 72.4049 36.9811L82.8151 39.5854C83.4193 39.7372 84.0525 39.7299 84.653 39.5643C85.2535 39.3987 85.8009 39.0804 86.2419 38.6403L100.67 24.2118C101.124 23.7603 101.45 23.1961 101.614 22.5772C101.778 21.9583 101.774 21.307 101.603 20.6901C101.432 20.0731 101.099 19.5129 100.64 19.0668C100.181 18.6207 99.6112 18.3049 98.9895 18.1518L86.6603 15.0785L83.5726 2.74206ZM53.5035 5.48348C53.6026 6.91458 53.1293 8.32646 52.1878 9.40873C51.2462 10.491 49.9134 11.1551 48.4823 11.2549C40.9448 11.7773 33.7157 14.4525 27.654 18.9628C21.5923 23.473 16.9527 29.6286 14.2867 36.6982C11.6207 43.7678 11.0402 51.4542 12.6143 58.844C14.1884 66.2338 17.8509 73.0163 23.1665 78.3858C28.4822 83.7552 35.2275 87.4857 42.6011 89.1342C49.9747 90.7826 57.6665 90.2795 64.7626 87.6848C71.8586 85.0901 78.0606 80.5128 82.6317 74.4967C87.2027 68.4807 89.9506 61.2789 90.5488 53.7471C90.6627 52.3159 91.3404 50.9885 92.4329 50.057C93.5254 49.1255 94.9432 48.6662 96.3744 48.78C97.8055 48.8939 99.1329 49.5716 100.064 50.6641C100.996 51.7566 101.455 53.1744 101.341 54.6056C100.578 64.2021 97.0757 73.3778 91.2509 81.0426C85.426 88.7073 77.5233 94.5388 68.4817 97.8443C59.4401 101.15 49.6396 101.79 40.2447 99.6899C30.8497 97.5893 22.2552 92.8361 15.4823 85.9947C8.70929 79.1534 4.04255 70.5116 2.03648 61.096C0.0304082 51.6805 0.769339 41.8869 4.16548 32.879C7.56162 23.871 13.4722 16.0273 21.195 10.2797C28.9179 4.53207 38.1283 1.12218 47.732 0.455127C49.1631 0.356013 50.575 0.829264 51.6573 1.77084C52.7396 2.71241 53.4036 4.05244 53.5035 5.48348ZM48.6555 29.2834C48.9147 29.9452 49.0411 30.6515 49.0273 31.3621C49.0135 32.0726 48.8598 32.7735 48.5751 33.4247C48.2904 34.0759 47.8801 34.6646 47.3679 35.1572C46.8556 35.6498 46.2512 36.0367 45.5894 36.2957C43.2234 37.2238 41.126 38.7268 39.4868 40.669C37.8475 42.6111 36.7181 44.9312 36.2006 47.4194C35.683 49.9076 35.7937 52.4856 36.5227 54.9203C37.2516 57.355 38.5757 59.5697 40.3755 61.3642C42.1752 63.1587 44.3937 64.4764 46.8305 65.1982C49.2674 65.9201 51.8457 66.0233 54.3324 65.4985C56.8191 64.9737 59.1358 63.8375 61.0732 62.1926C63.0106 60.5477 64.5075 58.4459 65.4287 56.0773C65.6864 55.415 66.072 54.8101 66.5635 54.2968C67.055 53.7836 67.6427 53.3723 68.2932 53.0862C68.9437 52.8002 69.6442 52.645 70.3546 52.6297C71.065 52.6143 71.7715 52.7391 72.4338 52.9968C73.096 53.2545 73.701 53.6401 74.2142 54.1316C74.7274 54.6231 75.1387 55.2108 75.4248 55.8613C75.7108 56.5118 75.866 57.2122 75.8813 57.9227C75.8967 58.6331 75.7719 59.3396 75.5143 60.0018C73.9408 64.0468 71.3841 67.6358 68.0752 70.4444C64.7664 73.253 60.8097 75.1927 56.5629 76.0881C52.3161 76.9835 47.9131 76.8064 43.752 75.5727C39.5908 74.3391 35.8027 72.0878 32.7302 69.0225C29.6576 65.9571 27.3975 62.1743 26.1541 58.0161C24.9107 53.8578 24.7232 49.4553 25.6086 45.2064C26.4941 40.9575 28.4245 36.9963 31.2253 33.6808C34.0262 30.3654 37.6092 27.8002 41.6504 26.2173C42.986 25.696 44.4739 25.7261 45.7873 26.301C47.1008 26.8759 48.1323 27.9485 48.6555 29.2834Z" fill="#FF8371" />
                            </svg>
                        </div>
                        <div className="box-2-bottom-card-content">
                            <div className="box-2-bottom-card-content-top">Set your <br /> interview goals</div>
                            <div className="box-2-bottom-card-content-bottom">Role | Industry | Difficulty</div>
                        </div>
                    </div>
                    <div className="box-2-bottom-card">
                        <div className="box-2-bottom-card-image">
                            <svg xmlns="http://www.w3.org/2000/svg" width="102" height="101" viewBox="0 0 102 101"
                                fill="none">
                                <path
                                    d="M21.2429 80.2606C17.3293 76.3572 14.2257 71.7188 12.1103 66.6121C9.99501 61.5054 8.90967 56.031 8.91672 50.5035C8.91672 27.2609 27.7574 8.42017 51.0001 8.42017C74.2427 8.42017 93.0834 27.2609 93.0834 50.5035C93.0834 73.7461 74.2427 92.5868 51.0001 92.5868H8.91672L21.2429 80.2606ZM46.7917 25.2535V75.7535H55.2084V25.2535H46.7917ZM29.9584 37.8785V63.1285H38.3751V37.8785H29.9584ZM63.6251 37.8785V63.1285H72.0417V37.8785H63.6251Z"
                                    fill="#FF8371" />
                            </svg>
                        </div>
                        <div className="box-2-bottom-card-content">
                            <div className="box-2-bottom-card-content-top">Mock interview with expert AI</div>
                            <div className="box-2-bottom-card-content-bottom">Mock interview with expert AI</div>
                        </div>
                    </div>
                    <div className="box-2-bottom-card">
                        <div className="box-2-bottom-card-image">
                            <svg xmlns="http://www.w3.org/2000/svg" width="101" height="101" viewBox="0 0 101 101"
                                fill="none">
                                <path
                                    d="M12.9524 79.6225H88.381V88.0035H12.9524V79.6225ZM25.5238 67.0511C30.1333 67.0511 33.9048 63.2797 33.9048 58.6701C33.9048 56.5749 33.0667 54.4797 31.8095 53.2225L37.2572 41.9082H38.0953C40.1905 41.9082 42.2857 41.0701 43.5429 39.813L54.8572 45.6797V46.0987C54.8572 50.7082 58.6286 54.4797 63.2381 54.4797C67.8476 54.4797 71.6191 50.7082 71.6191 46.0987C71.6191 44.0035 70.781 42.3273 69.5238 40.6511L74.9714 29.3368H75.8095C80.4191 29.3368 84.1905 25.5654 84.1905 20.9558C84.1905 16.3463 80.4191 12.5749 75.8095 12.5749C71.2 12.5749 67.4286 16.3463 67.4286 20.9558C67.4286 23.0511 68.2667 25.1463 69.5238 26.4035L64.0762 37.7177H63.2381C61.1429 37.7177 59.0476 38.5558 57.7905 39.813L46.4762 34.3654V33.5273C46.4762 28.9177 42.7048 25.1463 38.0953 25.1463C33.4857 25.1463 29.7143 28.9177 29.7143 33.5273C29.7143 35.6225 30.5524 37.7177 31.8095 38.9749L26.3619 50.2892H25.5238C20.9143 50.2892 17.1429 54.0606 17.1429 58.6701C17.1429 63.2797 20.9143 67.0511 25.5238 67.0511Z"
                                    fill="#FF8371" />
                            </svg>
                        </div>
                        <div className="box-2-bottom-card-content">
                            <div className="box-2-bottom-card-content-top">Instant <br /> Insights</div>
                            <div className="box-2-bottom-card-content-bottom">Get detailed domain analysis</div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>);
}

export default FeatureComponent;