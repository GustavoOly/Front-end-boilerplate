"use strict";

import React from "react";
import ReactDom from "react-dom/client";
import "./main.css";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="h-dvh dark:bg-black dark:text-white">
      <h1>Olá mundo</h1>
    </div>
  </React.StrictMode>,
);
