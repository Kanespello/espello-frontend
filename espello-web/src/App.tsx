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
import "@fontsource/exo-2/900-italic.css";

import FeatureComponent from "./components/Home/Feature";
import ChatBot from "./components/ChatBot";

function App() {
    return (
        <div className="container">
            {/*<Header/>*/}
            {/*<FeatureComponent/>*/}
            <ChatBot/>
        </div>
    );
}

export default App;
