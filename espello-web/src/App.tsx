import React from 'react';
import './App.css';
import Header from "./components/Header";

import "@fontsource/raleway"; // Defaults to weight 400
import "@fontsource/raleway/700.css"; // Specify weight
import "@fontsource/raleway/700-italic.css"; // Specify weight and style
import "@fontsource/raleway/800.css"; // Specify weight
import "@fontsource/raleway/800-italic.css"; // Specify weight and style
import "@fontsource/raleway/900.css"; // Specify weight
import "@fontsource/raleway/900-italic.css"; // Specify weight and style
import "@fontsource/exo-2"; // Defaults to weight 400
import "@fontsource/exo-2/700.css"; // Specify weight
import "@fontsource/exo-2/700-italic.css"; // Specify weight and style
import "@fontsource/exo-2/800.css"; // Specify weight
import "@fontsource/exo-2/800-italic.css"; // Specify weight and style
import "@fontsource/exo-2/900.css"; // Specify weight
import "@fontsource/exo-2/900-italic.css"; // Specify weight and style

function App() {
    return (
        <div className="container">
            <Header/>
            <div className="box-1">
                <div className="box-1-inner-top">
                    <div className="box-1-inner-top-inner">
                        <div className="box-1-inner-top-inner-left">
                            <div className="box-1-inner-top-inner-left-1">
                                <div className="box-1-inner-top-inner-left-1-1">
                                    Supercharge interview prep
                                </div>
                                <div className="box-1-inner-top-inner-left-1-2">
                                    <div className="box-1-inner-top-inner-left-1-2-1">
                                        with
                                    </div>
                                    <div className="box-1-inner-top-inner-left-1-2-2">
                                        <div className="box-1-inner-top-inner-left-1-2-2-content">
                                            Espello
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-1-inner-top-inner-left-2">
                                <div className="box-1-inner-top-inner-left-2-content">Product</div>
                                <div className="box-1-inner-top-inner-left-2-content">Consultant</div>
                                <div className="box-1-inner-top-inner-left-2-content">Strategy</div>
                                <div className="box-1-inner-top-inner-left-2-content">& more to come in future</div>
                            </div>
                        </div>
                        <div className="box-1-inner-top-inner-right">
                            <div className="box-1-inner-top-inner-right-1">Try now</div>
                            <div className="box-1-inner-top-inner-right-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="96" height="97" viewBox="0 0 96 97"
                                     fill="none">
                                    <path d="M50.2478 21.4998L77.2478 48.4998L50.2478 75.4998" stroke="#6E6E6E"
                                          strokeWidth="6.01004" strokeLinecap="square" strokeLinejoin="round"/>
                                    <path d="M73.5018 48.4998H18.7518" stroke="#6E6E6E" strokeWidth="6.01004"
                                          strokeLinecap="square" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-1-inner-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         viewBox="0 0 16 16" fill="none">
                        <path d="M3.49994 5.75131L8.00092 10.2523L12.5019 5.75131" stroke="#6E6E6E" strokeWidth="2"
                              strokeLinecap="round" strokeLinejoin="round"/>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="102" height="101" viewBox="0 0 102 101"
                                 fill="none">
                                <path
                                    d="M21.2429 80.2606C17.3293 76.3572 14.2257 71.7188 12.1103 66.6121C9.99501 61.5054 8.90967 56.031 8.91672 50.5035C8.91672 27.2609 27.7574 8.42017 51.0001 8.42017C74.2427 8.42017 93.0834 27.2609 93.0834 50.5035C93.0834 73.7461 74.2427 92.5868 51.0001 92.5868H8.91672L21.2429 80.2606ZM46.7917 25.2535V75.7535H55.2084V25.2535H46.7917ZM29.9584 37.8785V63.1285H38.3751V37.8785H29.9584ZM63.6251 37.8785V63.1285H72.0417V37.8785H63.6251Z"
                                    fill="#FF8371"/>
                            </svg>
                        </div>
                        <div className="box-2-bottom-card-content">
                            <div className="box-2-bottom-card-content-top">Set your <br/> interview goals</div>
                            <div className="box-2-bottom-card-content-bottom">Role | Industry | Difficulty</div>
                        </div>
                    </div>
                    <div className="box-2-bottom-card">
                        <div className="box-2-bottom-card-image">
                            <svg xmlns="http://www.w3.org/2000/svg" width="102" height="101" viewBox="0 0 102 101"
                                 fill="none">
                                <path
                                    d="M21.2429 80.2606C17.3293 76.3572 14.2257 71.7188 12.1103 66.6121C9.99501 61.5054 8.90967 56.031 8.91672 50.5035C8.91672 27.2609 27.7574 8.42017 51.0001 8.42017C74.2427 8.42017 93.0834 27.2609 93.0834 50.5035C93.0834 73.7461 74.2427 92.5868 51.0001 92.5868H8.91672L21.2429 80.2606ZM46.7917 25.2535V75.7535H55.2084V25.2535H46.7917ZM29.9584 37.8785V63.1285H38.3751V37.8785H29.9584ZM63.6251 37.8785V63.1285H72.0417V37.8785H63.6251Z"
                                    fill="#FF8371"/>
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
                                    fill="#FF8371"/>
                            </svg>
                        </div>
                        <div className="box-2-bottom-card-content">
                            <div className="box-2-bottom-card-content-top">Instant <br/> Insights</div>
                            <div className="box-2-bottom-card-content-bottom">Get detailed domain analysis</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
