import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  link: {
    textDecoration: "none"
  },
  button: {
    color: "white"
  }
};

const Header = ({ classes }) => (
  <AppBar position="fixed" color="primary" className={classes.root}>
    <Toolbar>
      <Typography variant="title" color="inherit" className={classes.grow}>
        Contact List
      </Typography>
      <NavLink
        className={classes.link}
        to="/contacts"
        activeStyle={{
          textDecoration: "underline",
          color: "white"
        }}
      >
        <Button className={classes.button} color="inherit">
          Contacts
        </Button>
      </NavLink>
      <NavLink
        className={classes.link}
        to="/create"
        activeStyle={{
          textDecoration: "underline",
          color: "white"
        }}
      >
        <Button className={classes.button} color="inherit">
          Add New
        </Button>
      </NavLink>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Header);
