import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "../Navigation";

export const App = () => {
  return (
    <Router>
      <Navigation />
    </Router>
  );
};
