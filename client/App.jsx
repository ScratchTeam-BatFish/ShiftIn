import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './dashboard/dashboard.jsx';
import Login from './login/login.jsx';
import Register from './register/register.jsx';


const App = () => {
    const handleLogout = async () => {
        try {
          const response = await fetch('http://localhost:3000/logout');
    
          if (!response.ok) throw new Error('Logout failed');
          
          // // Handle success (e.g., navigate to login page)
          const result = await response.json();
          console.log(result.message);
    
          if (result.clearToken) {
            // Clear token from localStorage
            localStorage.removeItem('accessToken');
            console.log('accessToken removed from localStorage');
    
            // Redirect user to the login page
            window.location.href='http://localhost:8080/';
          }
        }
        catch (err) {
          console.error(err);
        }
      }

    return (
      <Router>
        <Routes>
            
          <Route path="/" element={<div>Welcome to the app! <a href="/login">Login</a> or <a href="/register">Register</a></div>} />
          <Route path="/register" element={<Register />}> Connected in App Register Path </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
      
        </Routes>
      </Router>
    );
};

export default App;