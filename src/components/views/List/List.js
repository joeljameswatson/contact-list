import React from "react";
import List from "@material-ui/core/List";
import Contact from "./Contact";

const ContactList = ({ contacts }) => {
  return (
    <section>
      <List>
        {contacts.map(contactData => (
          <Contact key={contactData.id} contact={contactData} />
        ))}
      </List>
    </section>
  );
};

export default ContactList;
