import { useContext, useState } from "react";
import React from "react";
import { createContext } from "react";

const AuthContext = createContext({} as any);

export const AuthContextProvider = ({ children }: any) => {
  const auth = useState(null);
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("context must be used with a ContextProvider");
  }
  return context;
};
