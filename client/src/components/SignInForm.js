import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { UserContext } from "../context/UserContext";
import { validateSignInCredentials } from "../shared/validateFormCredentials";

const SignInForm = () => {
  const { SignInUser } = useContext(UserContext);
  const { setIsVerified } = useContext(AuthContext);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [errorEmailMessage, setErrorEmailMessage] = useState(null);
  const [errorPasswordMessage, setErrorPasswordMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const history = useHistory();

  const handleChange = (e) => {
    if (e.target.id === "userEmail") {
      setUserEmail(e.target.value);
    }

    if (e.target.id === "userPassword") {
      setUserPassword(e.target.value);
    }

    setErrorEmailMessage(null);
    setErrorPasswordMessage(null);
    setErrorMessage(null);
  };

  //  email: "testuser@yopmail.com"
  //  password: "testuser"

  const handleSubmit = (e) => {
    e.preventDefault();
    validateSignInCredentials(
      userEmail,
      userPassword,
      setErrorEmailMessage,
      setErrorPasswordMessage,
      setErrorMessage,
      history,
      setIsVerified,
      SignInUser
    );
  };

  return (
    <div className="signin_form__main">
      <div
        className={
          errorMessage
            ? "alert alert-danger visible"
            : "alert alert-danger invisible"
        }
        role="alert"
      >
        {errorMessage}
      </div>

      <div className="container signin_form__container">
        <div className="form__header">Please Sign In</div>

        <form
          className="signin_form"
          onSubmit={(e) => handleSubmit(e)}
          autoComplete="off"
        >
          <div className="form-group">
            <label htmlFor="userEmail">Email address</label>
            <input
              type="text"
              className="form-control"
              value={userEmail}
              onChange={(e) => handleChange(e)}
              id="userEmail"
              autoComplete="off"
              aria-describedby="emailHelp"
              autoFocus
              required
            />
            <small
              id="emailHelp"
              className={`form-text text-muted ${
                errorEmailMessage ? "visible" : "invisible"
              }`}
            >
              {errorEmailMessage}
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="userPassword">Password</label>
            <input
              type="password"
              className="form-control"
              value={userPassword}
              onChange={(e) => handleChange(e)}
              id="userPassword"
              autoComplete="off"
              aria-describedby="passwordHelp"
              required
            />
            <small
              id="passwordHelp"
              className={`form-text text-muted ${
                errorPasswordMessage ? "visible" : "invisible"
              }`}
            >
              {errorPasswordMessage}
            </small>
          </div>

          <button
            className="btn btn-primary"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Sign In
          </button>
        </form>
      </div>

      <div className="path_to_signup">
        Don't have a account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default SignInForm;
