import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './dashboard/dashboard.jsx';
import Login from './login/login.jsx';
import Register from './register/register.jsx';
import LandingPage from "./landingpage/LandingPage.jsx";


const App = () => {

    return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    );
};

export default App;