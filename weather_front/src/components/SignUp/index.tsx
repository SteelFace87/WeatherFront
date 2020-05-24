import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import { error } from "console";
import { FirebaseContext } from "../Firebase";

interface Props {
  firebase: any;
}

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>

    <FirebaseContext.Consumer>
      {(firebase: any) => <SignUpForm firebase={firebase} />}
    </FirebaseContext.Consumer>
  </div>
);

const SignUpForm = ({ firebase }: Props) => {
  const [initialState, setInitialState] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [error, setError] = useState(new Error());

  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === "" ||
    email === "" ||
    username === "";

  const handleSignUp = () => {
    firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser: any) => {
        setInitialState(authUser);
      })
      .catch((error: React.SetStateAction<Error>) => {
        console.log("error", error);
        setError(error);
      });
  };

  return (
    <div>
      <input
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Full Name"
      />
      <input
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Email"
      />
      <input
        name="password one"
        value={passwordOne}
        onChange={(e) => setPasswordOne(e.target.value)}
        type="text"
        placeholder="password"
      />
      <input
        name="password two"
        value={passwordTwo}
        onChange={(e) => setPasswordTwo(e.target.value)}
        type="text"
        placeholder="retype password"
      />
      <button disabled={isInvalid} type="submit" onClick={handleSignUp}>
        Sign Up
      </button>

      {error && <p>{error?.message}</p>}
    </div>
  );
};

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpPage;

export { SignUpForm, SignUpLink };
