import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import List from "./List";
import Detail from "./Detail";
import Create from "./Create";
import Edit from "./Edit";

const Routes = () => (
  <Switch>
    <Route exact path="/contacts" component={List} />
    <Route exact path="/contacts/:id" component={Detail} />
    <Route exact path="/create" component={Create} />
    <Route path="/edit/:id" component={Edit} />
    <Route render={() => <Redirect to="/contacts" />} />
  </Switch>
);

export default Routes;
