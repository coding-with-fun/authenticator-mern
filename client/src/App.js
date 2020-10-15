import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import {
  AuthenticatedRoute,
  UnAuthenticatedRoute,
} from "./shared/PrivateRoute";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="body__content container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <UnAuthenticatedRoute path="/signup">
              <SignUpForm />
            </UnAuthenticatedRoute>
            <UnAuthenticatedRoute path="/signin">
              <SignInForm />
            </UnAuthenticatedRoute>
            <AuthenticatedRoute path="/profile">
              <Profile />
            </AuthenticatedRoute>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
