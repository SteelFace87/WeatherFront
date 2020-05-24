import { useContext } from "react";
import { FirebaseContext } from "../components/Firebase";

export const useFirebaseContext = () => {
  const context = useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error("context must be used with a ContextProvider");
  }
  return context;
};
