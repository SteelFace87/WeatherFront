import React, { useState } from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import { useFirebaseContext } from "../../contexts/firebaseContext";

const PasswordForgetPage = () => (
  <div>
    <h1>PasswordForget</h1>
    <PasswordForgetForm />
  </div>
);

const PasswordForgetForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<Error | null>(null);
  const firebase = useFirebaseContext();

  const handleForgotPassword = () => {
    //  @ts-ignore
    firebase
      .doPasswordReset(email)
      .then(() => {
        setEmail("");
      })
      .catch((error: Error) => {
        setError(error);
      });
  };

  const isInvalid = email === "";

  return (
    <div>
      <input
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Email Address"
      />
      <button disabled={isInvalid} onClick={handleForgotPassword}>
        Reset My Password
      </button>

      {error && <p>{error.message}</p>}
    </div>
  );
};

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

export { PasswordForgetForm, PasswordForgetLink };
