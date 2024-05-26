import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import UserInteract from "./components/Session/CurrentSession";
import UserWaitlist from './components/UserWaitlist';
import Account from './components/Account';
import { useAuth } from './components/Account/AuthContext';

import './App.css';
import './util/Fonts'
import CreateSession from './components/Session/CreateSession';

function App() {
  const { user } = useAuth();

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Account />} />
          <Route path="/session/current-session/:sessionId" element={user !== null ? <UserInteract /> : <Navigate to="/login" replace />} />
          <Route path="/session/create-session"  element={user !== null ? <CreateSession /> : <Navigate to="/login" replace />} />
          <Route path="/user-waitlist" element={<UserWaitlist />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
