"use strict";

import React from "react";
import ReactDom from "react-dom/client";
import "./main.css";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="flex min-h-screen flex-col items-center justify-center p-1 text-center">
      <img width="250px" src=".././public/logo.png" alt="" />
      <h1 className="mb-4 max-w-2xl text-5xl font-bold">
        Welcome to front-end boilerplate
      </h1>
      <p className="mb-8 text-xl text-gray-700">
        Start building your awesome project!
      </p>
      <a
        href="https://github.com/GustavoOly/Front-end-boilerplate"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center rounded-lg bg-black px-4 py-2 text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black"
      >
        View on GitHub
      </a>
    </div>
  </React.StrictMode>,
);
