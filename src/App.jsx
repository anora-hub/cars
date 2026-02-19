import React, { useState, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './companents/Loyout'; // check spelling & folder name
import HomePage from './pages/HomePage';
import CarsPage from './pages/CarsPage';
import HistoryPage from './pages/HistoryPage';
import ProfilePage from './pages/ProfilePage';
import { ModalProvider } from './context/ModalContext';
import LoginPage from './pages/LoginPage';

const App = () => {
  // Initialize isAuth from localStorage
  const [isAuth, setIsAuth] = useState(localStorage.getItem("auth") === "true");

  // Sync isAuth with localStorage changes (optional, in case other parts of app change auth)
  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuth(localStorage.getItem("auth") === "true");
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <BrowserRouter>
      <ModalProvider>
        <Routes>
          {/* Redirect authenticated users from login to home */}
          <Route
            path="/"
            element={isAuth ? <Navigate to="/home" replace /> : <LoginPage setIsAuth={setIsAuth} />}
          />

          {/* Protected routes */}
          <Route
            element={isAuth ? <Layout /> : <Navigate to="/" replace />}
          >
            <Route path="home" element={<HomePage />} />
            <Route path="cars" element={<CarsPage />} />
            <Route path="history" element={<HistoryPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>

          {/* Catch-all redirects to login */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  );
};

export default App;
