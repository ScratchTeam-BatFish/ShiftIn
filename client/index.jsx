import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import "./style.scss";

const mountNode = document.getElementById("root");
createRoot(mountNode).render('hi');