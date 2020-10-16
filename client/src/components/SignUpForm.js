import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { validateSignUpCredentials } from "../shared/validateFormCredentials";

const SignUpForm = () => {
  const { SignUpUser } = useContext(UserContext);

  const [userDisplayName, setUserDisplayName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");

  const [errorDisplayNameMessage, setErrorDisplayNameMessage] = useState(null);
  const [errorEmailMessage, setErrorEmailMessage] = useState(null);
  const [errorPasswordMessage, setErrorPasswordMessage] = useState(null);
  const [
    errorConfirmPasswordMessage,
    setErrorConfirmPasswordMessage,
  ] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const history = useHistory();

  const handleChange = (e) => {
    if (e.target.id === "userDisplayName") {
      setUserDisplayName(e.target.value);
    }

    if (e.target.id === "userEmail") {
      setUserEmail(e.target.value);
    }

    if (e.target.id === "userPassword") {
      setUserPassword(e.target.value);
    }

    if (e.target.id === "userConfirmPassword") {
      setUserConfirmPassword(e.target.value);
    }

    setErrorDisplayNameMessage(null);
    setErrorEmailMessage(null);
    setErrorPasswordMessage(null);
    setErrorConfirmPasswordMessage(null);
    setErrorMessage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateSignUpCredentials(
      userDisplayName,
      userEmail,
      userPassword,
      userConfirmPassword,
      setErrorDisplayNameMessage,
      setErrorEmailMessage,
      setErrorPasswordMessage,
      setErrorConfirmPasswordMessage,
      setErrorMessage,
      history,
      SignUpUser
    );
  };

  return (
    <div className="signup_form__main">
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

      <div className="container signup_form__container">
        <div className="form__header">Please Sign Up</div>

        <form
          className="signup_form"
          onSubmit={(e) => handleSubmit(e)}
          autoComplete="off"
        >
          <div className="form-group">
            <label htmlFor="userDisplayName">Name</label>
            <input
              type="text"
              className="form-control"
              value={userDisplayName}
              onChange={(e) => handleChange(e)}
              id="userDisplayName"
              autoComplete="off"
              aria-describedby="displayNameHelp"
              autoFocus
              required
            />
            <small
              id="displayNameHelp"
              className={`form-text text-muted ${
                errorDisplayNameMessage ? "visible" : "invisible"
              }`}
            >
              {errorDisplayNameMessage}
            </small>
          </div>

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

          <div className="form-group">
            <label htmlFor="userConfirmPassword">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              value={userConfirmPassword}
              id="userConfirmPassword"
              onChange={(e) => handleChange(e)}
              autoComplete="off"
              aria-describedby="confirmPasswordHelp"
              required
            />
            <small
              id="confirmPasswordHelp"
              className={`form-text text-muted ${
                errorConfirmPasswordMessage ? "visible" : "invisible"
              }`}
            >
              {errorConfirmPasswordMessage}
            </small>
          </div>

          <button
            className="btn btn-primary"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Sign Up
          </button>
        </form>
      </div>

      <div className="path_to_signin">
        Already have a account? <Link to="/signin">Sign In</Link>
      </div>
    </div>
  );
};

export default SignUpForm;
