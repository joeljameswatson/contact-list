import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Padding from "components/shared/Padding";
import Paper from "@material-ui/core/Paper";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const Container = styled.div`
  .paper {
    max-width: 600px;
    margin: 30px auto;
    padding: 15px;
  }
`;

const Form = ({ handleInputChange, handleSave, values, title }) => {
  return (
    <Container>
      <Padding>
        <Paper className="paper">
          <Typography variant="title" gutterBottom>
            {title}
          </Typography>
          <form noValidate autoComplete="off">
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="first_name"
                  label="First Name"
                  value={values.first_name}
                  onChange={e => handleInputChange(e)}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="last_name"
                  label="Last Name"
                  value={values.last_name}
                  onChange={e => handleInputChange(e)}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="email"
                  label="Email"
                  value={values.email}
                  onChange={e => handleInputChange(e)}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="phone"
                  label="Phone"
                  value={values.phone}
                  onChange={e => handleInputChange(e)}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSave}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Padding>
    </Container>
  );
};

export default Form;
