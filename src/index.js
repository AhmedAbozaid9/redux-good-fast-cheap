import React from "react";
import {createRoot} from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "./components/App.js";
import selectButtonReducer from "./reducers";

createRoot(document.querySelector("#root")).render(
  <Provider store={configureStore({ reducer: selectButtonReducer })}>
    <App />
  </Provider>
);
