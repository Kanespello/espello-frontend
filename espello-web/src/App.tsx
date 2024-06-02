import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CurrentSession from './components/Session/CurrentSession';
import UserWaitlist from './components/UserWaitlist';
import Account from './components/Account';
import { useAuth } from './components/Account/AuthContext';
import CreateSession from './components/Session/CreateSession';

import './App.css';
import './util/Fonts';
import { PATH_CREATE_SESSION, PATH_CURRENT_SESSION_WITH_SESSION_ID, PATH_DEFAULT, PATH_HOME, PATH_LOGIN, PATH_USER_WAITLIST } from './util/SiteRoutes';

function App() {
  const { userDetails } = useAuth();

  useEffect(() => {
    // Set browser zoom to 90%
    (document.body.style as any).zoom = "100%";
  }, []);


  // Define routes as an array of objects using path constants
  const siteRoutes = [
    { path: PATH_HOME, element: <Home /> },
    {
      path: PATH_LOGIN,
      element: userDetails === null ? <Account /> : <Navigate to={PATH_CREATE_SESSION} replace />,
    },
    {
      path: PATH_CURRENT_SESSION_WITH_SESSION_ID,
      element: userDetails !== null ? <CurrentSession /> : <Navigate to={PATH_LOGIN} replace />,
    },
    {
      path: PATH_CREATE_SESSION,
      element: userDetails !== null ? <CreateSession /> : <Navigate to={PATH_LOGIN} replace />,
    },
    { path: PATH_USER_WAITLIST, element: <UserWaitlist /> },
    { path: PATH_DEFAULT, element: <Navigate to={PATH_HOME} replace /> },
  ];

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          {/* Map through the siteRoutes array and render routes dynamically */}
          {siteRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
