import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from './App.jsx';

const mountNode = document.getElementById("root");
createRoot(mountNode).render(<App />);