"use strict";

import React from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App";

const root = createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
