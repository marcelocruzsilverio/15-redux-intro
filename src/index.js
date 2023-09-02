import React from "react";
import ReactDOM from "react-dom/client";
// o provider vai conectar o redux com o react
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // conectando o react com o redux
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// antes de conectar

//  <React.StrictMode>
//   <App />
// </React.StrictMode>

// para conectar o redux com o react precisamos installar o react-redux com o comando npm i react-redux
