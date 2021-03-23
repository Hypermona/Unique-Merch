import React, { useEffect } from "react";
import "./App.css";
import Main from "./Components/main";
import { Provider } from "react-redux";
import { ConfigureStore } from "./Redux/configureStore";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";

const store = ConfigureStore();

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-192838886-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
