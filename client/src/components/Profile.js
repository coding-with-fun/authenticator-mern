import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { validateUpdateCredentials } from "../shared/validateFormCredentials";

const Profile = () => {
  const { userDetails, UpdateUser, DeleteUser } = useContext(UserContext);

  const [userDisplayName, setUserDisplayName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  const [errorDisplayNameMessage, setErrorDisplayNameMessage] = useState(null);
  const [errorEmailMessage, setErrorEmailMessage] = useState(null);
  const [responseMessage, setResponseMessage] = useState(null);

  const history = useHistory();

  useEffect(() => {
    if (userDetails) {
      setUserDisplayName(userDetails.name);
      setUserEmail(userDetails.email);
      setUserAvatar(userDetails.avatar);
    } else {
      setUserDisplayName("");
      setUserEmail("");
      setUserAvatar(
        "http://www.gravatar.com/avatar/aaee2964ee764dbc53cea54b81cc996f?s=200&r=pg&d=mm"
      );
    }
  }, [userDetails]);

  const handleChange = (e) => {
    if (e.target.id === "userDisplayName") {
      setUserDisplayName(e.target.value);
    }

    if (e.target.id === "userEmail") {
      setUserEmail(e.target.value);
    }

    setErrorDisplayNameMessage(null);
    setErrorEmailMessage(null);
    setResponseMessage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateUpdateCredentials(
      userDisplayName,
      userEmail,
      setErrorDisplayNameMessage,
      setErrorEmailMessage,
      setResponseMessage,
      history,
      UpdateUser
    );
  };

  const handleDelete = (e) => {
    e.preventDefault();
    DeleteUser(history);
  };

  return (
    <div className="profile__container">
      <div
        className={
          responseMessage
            ? responseMessage.status
              ? "alert alert-success visible"
              : "alert alert-danger visible"
            : "alert alert-danger invisible"
        }
        role="alert"
      >
        {responseMessage?.msg}
      </div>

      <div className="container signup_form__container">
        <div className="form__header">User Profile</div>

        <img className="avatar" src={userAvatar} alt="" />

        <form className="signup_form" autoComplete="off">
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

          <div className="w-100 btn__group">
            <button className="btn btn-danger" onClick={(e) => handleDelete(e)}>
              Delete
            </button>

            <button
              className="btn btn-primary"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
