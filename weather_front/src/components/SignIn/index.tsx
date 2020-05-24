import React, { Component, useState } from "react";
import { withRouter } from "react-router-dom";
import { SignUpLink } from "../SignUp";
import * as ROUTES from "../../constants/routes";
import { useFirebaseContext } from "../../contexts/firebaseContext";
import { PasswordForgetLink } from "../PasswordForget";

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <SignUpLink />
    <PasswordForgetLink />
  </div>
);

const SignInFormBase = ({ history }: any) => {
  const firebase = useFirebaseContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<Error | undefined>(undefined);

  const handleSignIn = () => {
    //@ts-ignore
    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        setEmail("");
        setPassword("");
        history.push(ROUTES.HOME);
      })
      .catch((error: Error) => {
        setError(error);
      });
  };

  const isInvalid = password === "" || email === "";

  return (
    <div>
      <input
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Email Address"
      />
      <input
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <button disabled={isInvalid} type="submit" onClick={() => handleSignIn()}>
        Sign In
      </button>

      {error && <p>{error.message}</p>}
    </div>
  );
};

const SignInForm = withRouter(SignInFormBase);

export default SignInPage;

export { SignInForm };
