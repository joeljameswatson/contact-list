import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "./List";
import Detail from "./Detail";
import Header from "./Header";
import Create from "./Create";
import Edit from "./Edit";

import configureStore from "../configureStore";

const styles = {
  content: {
    paddingTop: "64px"
  }
};

const store = configureStore();

const Root = ({ classes }) => (
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <div className={classes.content}>
        <CssBaseline />
        <Header />
        <Route exact path="/contacts" component={List} />
        <Route exact path="/contacts/:id" component={Detail} />
        <Route exact path="/create" component={Create} />
        <Route path="/edit/:id" component={Edit} />
      </div>
    </Router>
  </Provider>
);

export default withStyles(styles)(Root);
