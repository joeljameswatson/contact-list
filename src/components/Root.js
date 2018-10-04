import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Header";
import Routes from "./Routes";
import configureStore from "../configureStore";

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Routes />
      </React.Fragment>
    </Router>
  </Provider>
);

export default Root;
