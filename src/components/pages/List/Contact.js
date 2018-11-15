import { Link, withRouter } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import FaceIcon from "@material-ui/icons/Face";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  a {
    text-decoration: none;
  }
`;

const Contact = ({ contact, match }) => {
  const fullName = `${contact.first_name} ${contact.last_name}`;
  return (
    <Container>
      <Link to={`${match.url}/${contact.id}`}>
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
    </Container>
  );
};

export default withRouter(Contact);
