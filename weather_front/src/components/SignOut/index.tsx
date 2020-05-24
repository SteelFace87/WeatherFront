import React from "react";
import { useFirebaseContext } from "../../contexts/firebaseContext";

const SignOutButton = () => {
  const firebase = useFirebaseContext();

  return (
    //@ts-ignore
    <button type="button" onClick={firebase.doSignOut}>
      Sign Out
    </button>
  );
};

export default SignOutButton;
