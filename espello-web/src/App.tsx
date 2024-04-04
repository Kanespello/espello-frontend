import React from 'react';
import './App.css';
import Header from "./components/Header";

import "@fontsource/raleway"; // Defaults to weight 400
import "@fontsource/raleway/800.css"; // Specify weight
import "@fontsource/raleway/800-italic.css"; // Specify weight and style
import "@fontsource/exo-2"; // Defaults to weight 400
import "@fontsource/exo-2/700.css"; // Specify weight
import "@fontsource/exo-2/700-italic.css"; // Specify weight and style

function App() {
    return (
        <div className="container">
            <Header/>
            <div className="box-1">
                <div className="box-1-inner">
                    <div className="box-1-inner-inner">
                        <div className="box-1-inner-inner-left">
                            <div className="box-1-inner-inner-left-1">
                                <div className="box-1-inner-inner-left-1-1">
                                    Supercharge interview prep
                                </div>
                                <div className="box-1-inner-inner-left-1-2">
                                    <div className="box-1-inner-inner-left-1-2-1">
                                        with
                                    </div>
                                    <div className="box-1-inner-inner-left-1-2-2">
                                        <div className="box-1-inner-inner-left-1-2-2-content">
                                            Espello
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-1-inner-inner-left-2">
                                <div className="box-1-inner-inner-left-2-content">Product</div>
                                <div className="box-1-inner-inner-left-2-content">Consultant</div>
                                <div className="box-1-inner-inner-left-2-content">Strategy</div>
                                <div className="box-1-inner-inner-left-2-content">& more to come in future</div>
                            </div>
                        </div>
                        <div className="box-1-inner-inner-right">
                            <div className="box-1-inner-inner-right-1">Try now</div>
                            <div className="box-1-inner-inner-right-2">
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
            </div>
        </div>
    );
}

export default App;
