import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Dashboard from './dashboard/dashboard.jsx';
import Login  from './login/login.jsx';
import Register from './register/register.jsx';
import App from './App.jsx';

const mountNode = document.getElementById("root");
createRoot(mountNode).render(<App />);