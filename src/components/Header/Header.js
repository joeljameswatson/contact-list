import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { NavLink, Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    textDecoration: "none",
    color: "white"
  },
  link: {
    textDecoration: "none",
    color: "white"
  },
  button: {
    color: "white"
  }
};

const Header = ({ classes }) => (
  <AppBar color="primary" className={classes.root} position="sticky">
    <Toolbar>
      <Typography variant="title" color="inherit" className={classes.grow}>
        <Link to="/contacts" className={classes.link}>
          Contact List
        </Link>
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
