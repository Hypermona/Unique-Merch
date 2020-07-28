import React from "react";
import "./App.css";
import Main from "./Components/main";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
