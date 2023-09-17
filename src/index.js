import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import NavigationProvider from "./components/store/NavigationProvider";
import HumanResourcesProvider from "./components/store/LineManagmentProvider";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavigationProvider>
        <HumanResourcesProvider>
          <App />
        </HumanResourcesProvider>
      </NavigationProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
