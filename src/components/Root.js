import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import List from "./List";
import Detail from "./Detail";
import Header from "./Header";

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
        <Header />
        <Route exact path="/contacts" component={List} />
        <Route path="/contacts/:id" component={Detail} />
      </div>
    </Router>
  </Provider>
);

export default withStyles(styles)(Root);
