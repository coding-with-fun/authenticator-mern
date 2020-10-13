import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { HomeProvider } from "./context/HomeContext";
import { UserProvider } from "./context/UserContext";
import "./scss/index.scss";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <HomeProvider>
      <UserProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </UserProvider>
    </HomeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
