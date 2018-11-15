import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "./Layout";
import { Provider } from "react-redux";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "../configureStore";

const store = configureStore();

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#4dabf5",
      main: "#2196f3",
      dark: "#1769aa",
      contrastText: "#fff"
    }
  }
});

const Root = () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <React.Fragment>
          <CssBaseline />
          <Layout />
        </React.Fragment>
      </Router>
    </Provider>
  </MuiThemeProvider>
);

export default Root;
