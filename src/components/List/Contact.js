import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import { Link, withRouter } from "react-router-dom";
import FaceIcon from "@material-ui/icons/Face";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    textDecoration: "none"
  }
};

const Contact = ({ contact, match, classes }) => {
  const fullName = `${contact.first_name} ${contact.last_name}`;
  return (
    <Link to={`${match.url}/${contact.id}`} className={classes.root}>
      <ListItem key={contact.id} dense button>
        {contact.avatar ? (
          <Avatar
            alt={fullName}
            src={`${process.env.PUBLIC_URL}${contact.avatar}`}
          />
        ) : (
          <Avatar>
            <FaceIcon />
          </Avatar>
        )}
        <ListItemText primary={fullName} />
      </ListItem>
    </Link>
  );
};

export default withStyles(styles)(withRouter(Contact));
