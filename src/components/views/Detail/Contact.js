import { Link, withRouter } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Padding from "components/shared/Padding";
import React from "react";
import Spinner from "components/shared/Spinner";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const Container = styled.section`
  .card {
    max-width: 400px;
    margin: 30px auto;
  }
  .media {
    height: 300px;
    object-fit: cover;
  }
`;

export const Contact = ({ contact = {}, handleRequestDelete, loading, id }) => {
  return (
    <Container>
      <Padding>
        <Card className="card">
          {contact.avatar_large && (
            <CardMedia
              className="media"
              image={`${process.env.PUBLIC_URL}${contact.avatar_large}`}
            />
          )}
          <Spinner isVisible={loading} />
          {!loading && (
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {contact.first_name} {contact.last_name}
              </Typography>
              <Typography component="p">Email: {contact.email}</Typography>
              <Typography component="p">Phone: {contact.phone}</Typography>
            </CardContent>
          )}

          <CardActions>
            <Link to={`/edit/${id}`}>
              <Button size="small" color="primary" id="edit-contact">
                Edit
              </Button>
            </Link>
            <Button
              size="small"
              color="primary"
              onClick={handleRequestDelete}
              id="delete-contact"
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      </Padding>
    </Container>
  );
};

export default withRouter(Contact);
