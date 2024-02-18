import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Dashboard from './dashboard/dashboard.jsx';
import Login  from './log-in/login.jsx';
import Register from './register/register.jsx';

const mountNode = document.getElementById("root");
// createRoot(mountNode).render(<Dashboard />);
createRoot(mountNode).render(<Login />);
// createRoot(mountNode).render(<Register />);