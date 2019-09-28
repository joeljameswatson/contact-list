import { Link, NavLink } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const Container = styled.div`
  .grow {
    flex-grow: 1;
  }
  .app-name {
    flex-grow: 1;
    text-decoration: none;
    color: white;
  }
  .link {
    text-decoration: none;
    color: white;
  }
  .button {
    color: white;
  }
`;

const Header = () => (
  <Container>
    <AppBar color="primary" className="grow" position="fixed">
      <Toolbar>
        <Typography variant="title" color="inherit" className="app-name">
          <Link to="/contacts" className="link">
            Contact List
          </Link>
        </Typography>

        <NavLink
          className="link"
          to="/contacts"
          activeStyle={{
            textDecoration: "underline",
            color: "white"
          }}
        >
          <Button className="button" color="inherit">
            Contacts
          </Button>
        </NavLink>
        <NavLink
          className="link"
          to="/create"
          activeStyle={{
            textDecoration: "underline",
            color: "white"
          }}
        >
          <Button className="button" color="inherit">
            Add New
          </Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  </Container>
);

export default Header;
