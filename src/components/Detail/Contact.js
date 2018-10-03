import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

const Contact = ({ contact }) => {
  if (!contact) {
    return null;
  }
  const fullName = `${contact.first_name} ${contact.last_name}`;
  return (
    <ListItem key={contact.id} dense button>
      <Avatar alt={fullName} src={contact.avatar} />
      <ListItemText
        primary={fullName}
        secondary={`phone: ${contact.phone} | email: ${contact.email} `}
      />
    </ListItem>
  );
};

export default Contact;
