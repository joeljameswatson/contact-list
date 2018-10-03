import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import { Link, withRouter } from "react-router-dom";

const Contact = ({ contact, match }) => {
  const fullName = `${contact.first_name} ${contact.last_name}`;
  return (
    <Link to={`${match.url}/${contact.id}`}>
      <ListItem key={contact.id} dense button>
        <Avatar alt={fullName} src={contact.avatar} />
        <ListItemText primary={fullName} />
      </ListItem>
    </Link>
  );
};

export default withRouter(Contact);
