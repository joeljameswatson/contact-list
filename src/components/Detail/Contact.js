import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

const Contact = ({ contact }) => {
  if (!contact) {
    return null;
  }
  const secondaryLine = contact.phone
    ? `phone: ${contact.phone} | email: ${contact.email} `
    : "";
  const fullName = `${contact.first_name} ${contact.last_name}`;
  return (
    <ListItem key={contact.id} dense button>
      <Avatar alt={fullName} src={contact.avatar} />
      <ListItemText primary={fullName} secondary={secondaryLine} />
    </ListItem>
  );
};

export default Contact;
