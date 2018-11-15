import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Header";
import React from "react";
import Routes from "./Routes";

const Layout = props => {
  return (
    <React.Fragment>
      <Header />
      <Routes />
    </React.Fragment>
  );
};

export default Layout;
