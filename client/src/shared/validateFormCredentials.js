import validateEmail from "./validateEmail";

export const validateSignInCredentials = (
  userEmail,
  userPassword,
  setErrorEmailMessage,
  setErrorPasswordMessage,
  history,
  setIsVerified,
  SignInUser
) => {
  let body;

  try {
    if (!userEmail) {
      setErrorEmailMessage("Please fill in email address.");
    } else {
      if (!userPassword) {
        setErrorPasswordMessage("Please fill in password.");
      } else {
        if (!validateEmail(userEmail)) {
          setErrorEmailMessage("Invalid email address.");
        } else {
          if (userPassword.length < 5) {
            setErrorPasswordMessage(
              "Password needs to be at least 5 characters long."
            );
          } else {
            body = {
              email: userEmail,
              password: userPassword,
            };

            SignInUser(body, setIsVerified, history);
          }
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
};

export const validateSignUpCredentials = (
  userDisplayName,
  userEmail,
  userPassword,
  userConfirmPassword,
  setErrorDisplayNameMessage,
  setErrorEmailMessage,
  setErrorPasswordMessage,
  setErrorConfirmPasswordMessage,
  history,
  setIsVerified,
  SignUpUser
) => {
  let body;

  try {
    if (!userDisplayName) {
      setErrorDisplayNameMessage("Please fill in display name");
    } else {
      if (!userEmail) {
        setErrorEmailMessage("Please fill in email address.");
      } else {
        if (!userPassword) {
          setErrorPasswordMessage("Please fill in password.");
        } else {
          if (!userConfirmPassword) {
            setErrorConfirmPasswordMessage("Please fill in confirm password.");
          } else {
            if (!validateEmail(userEmail)) {
              setErrorEmailMessage("Invalid email address.");
            } else {
              if (userPassword.length < 5) {
                setErrorPasswordMessage(
                  "Password needs to be at least 5 characters long."
                );
              } else {
                if (userConfirmPassword.length < 5) {
                  setErrorConfirmPasswordMessage(
                    "Password needs to be at least 5 characters long."
                  );
                } else {
                  if (userPassword !== userConfirmPassword) {
                    setErrorConfirmPasswordMessage("Password does not match.");
                  } else {
                    body = {
                      name: userDisplayName,
                      email: userEmail,
                      password: userPassword,
                      confirmPassword: userConfirmPassword,
                    };

                    SignUpUser(body, setIsVerified, history);
                  }
                }
              }
            }
          }
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
};
