import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="body__content container">
          <Switch>
            <Route exact path="/">
              <Body />
            </Route>
            <Route path="/signup">
              <SignUpForm />
            </Route>
            <Route path="/signin">
              <SignInForm />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
