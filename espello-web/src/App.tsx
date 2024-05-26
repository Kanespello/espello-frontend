import React, { SetStateAction } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from './components/Home';
import UserInteract from "./components/UserInteract";
import UserWaitlist from './components/UserWaitlist';
import Account from './components/Account';
import { useAuth } from './components/Account/AuthContext';

import './App.css';
import './util/Fonts'

function App() {
  const { user } = useAuth();

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Account />} />
          <Route path="/userInteract" element={user !== null ? <UserInteract /> : <Navigate to="/login" replace />} />
          <Route path="/userWaitlist" element={<UserWaitlist />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
