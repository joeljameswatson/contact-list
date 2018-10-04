import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Header";
import Routes from "./Routes";
import configureStore from "../configureStore";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

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
          <Header />
          <Routes />
        </React.Fragment>
      </Router>
    </Provider>
  </MuiThemeProvider>
);

export default Root;
