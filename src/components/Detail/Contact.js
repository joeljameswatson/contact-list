import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  card: {
    maxWidth: 345
  }
};

const Contact = ({ contact = {}, classes, handleRequestDelete }) => {
  const fullName = `${contact.first_name} ${contact.last_name}`;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        {contact.avatar && (
          <CardMedia
            component="img"
            alt={fullName}
            height="140"
            image={contact.avatar}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {fullName}
          </Typography>
          <Typography component="p">Email: {contact.email}</Typography>
          <Typography component="p">Phone: {contact.phone}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="primary" onClick={handleRequestDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(Contact);
