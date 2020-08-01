import React from "react";
import "./App.css";
import Main from "./Components/main";
import { Provider } from "react-redux";
import { ConfigureStore } from "./Redux/configureStore";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
