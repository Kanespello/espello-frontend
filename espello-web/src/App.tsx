import React, { useState } from 'react';
import './App.css';
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
import UserInteract from "./components/UserIntract";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from './components/Home';
import UserWaitlist from './components/UserWaitlist';
import Account from './components/Login';

function App() {

    return (<div className="container">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/userInteract" element={<UserInteract />} />
                <Route path="/userWaitlist" element={<UserWaitlist />} />
                <Route path="/login" element={<Account />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </div>);

}

export default App;