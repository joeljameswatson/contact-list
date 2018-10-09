import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { withRouter, Link } from "react-router-dom";
import Padding from "components/shared/Padding";
import Spinner from "components/shared/Spinner";

const styles = {
  card: {
    maxWidth: 400,
    margin: "30px auto"
  },
  media: {
    height: 300,
    objectFit: "cover"
  }
};

const Contact = ({
  contact = {},
  classes,
  handleRequestDelete,
  loading,
  id
}) => {
  return (
    <Padding>
      <Card className={classes.card}>
        {contact.avatar_large && (
          <CardMedia
            className={classes.media}
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
            <Button size="small" color="primary">
              Edit
            </Button>
          </Link>
          <Button size="small" color="primary" onClick={handleRequestDelete}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </Padding>
  );
};

export default withRouter(withStyles(styles)(Contact));
