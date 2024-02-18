import React from "react";
import { createRoot } from "react-dom/client";
import "../style.css";
import Dashboard from './dashboard.jsx'

const mountNode = document.getElementById("root");
createRoot(mountNode).render(<Dashboard />);