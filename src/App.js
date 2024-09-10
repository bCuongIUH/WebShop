import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import HomePage from "./component/HomePage/HomePage";
import OTPVerification from "./component/Register/OTPVerification";
import UIPage from "./pages/UIPage";
import RequireAuth from "./component/AuthenticatedRouter";
import { UserProvider } from './untills/context/UserContext';

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Route mặc định */}
          <Route path="/register" element={<Register />} />
          <Route path="/otp-verification" element={<OTPVerification />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/UIPage"
            element={
              <RequireAuth>
                <UIPage />
              </RequireAuth>
            }
          />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
