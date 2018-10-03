import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import List from "./List";
import Detail from "./Detail";

import configureStore from "../configureStore";

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Route exact path="/contacts" component={List} />
        <Route path="/contacts/:id" component={Detail} />
      </div>
    </Router>
  </Provider>
);

export default Root;
