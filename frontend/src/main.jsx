import React from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./store.js";
import "./index.css";
import App from "./App.jsx";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Toaster position="top-right" reverseOrder={false} />
    <App />
  </Provider>
);
