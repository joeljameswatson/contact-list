import { Redirect, Route, Switch } from "react-router-dom";

import Create from "components/views/Create";
import Detail from "components/views/Detail";
import Edit from "components/views/Edit";
import List from "components/views/List";
import React from "react";

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
