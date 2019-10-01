import React from "react";
import List from "@material-ui/core/List";
import Contact from "./Contact";
import styled from "styled-components";

const Container = styled.section`
  height: 100%;
  overflow: scroll;
`;

const ContactList = ({ contacts }) => {
  return (
    <Container>
      <List>
        {contacts.map(contactData => (
          <Contact key={contactData.id} contact={contactData} />
        ))}
      </List>
    </Container>
  );
};

export default ContactList;
