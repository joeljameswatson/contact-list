import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: 20
  }
};

const Spinner = ({ isVisible, classes }) => {
  if (isVisible) {
    return (
      <div className={classes.root}>
        <CircularProgress size={50} />
      </div>
    );
  } else {
    return null;
  }
};

export default withStyles(styles)(Spinner);
