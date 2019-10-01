import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import Routes from "./Routes";
import styled from "styled-components";

const AppLayout = styled.div`
  padding-top: 64px;
  padding-bottom: 40px;
  height: 100vh;
  position: relative;
`;

const Layout = props => {
  return (
    <AppLayout>
      <Header />
      <Routes />
      <Footer />
    </AppLayout>
  );
};

export default Layout;
