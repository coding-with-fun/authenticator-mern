import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";
import "./scss/index.scss";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
