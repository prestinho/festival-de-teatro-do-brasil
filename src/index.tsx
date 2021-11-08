import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { SessionContextProvider } from "./contexts/SessionContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SessionContextProvider>
        <App />
      </SessionContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
