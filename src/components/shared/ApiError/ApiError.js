import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Padding from "components/shared/Padding";

const ApiError = ({ message, handleRetry }) => (
  <Padding>
    <Card>
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          Something went wrong...
        </Typography>
        <Typography gutterBottom component="p">
          {message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" onClick={handleRetry}>
          Retry
        </Button>
      </CardActions>
    </Card>
  </Padding>
);

export default ApiError;
