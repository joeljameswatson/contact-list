import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Form = ({ handleInputChange, handleSave, values }) => {
  return (
    <form noValidate autoComplete="off">
      <TextField
        name="first_name"
        label="First Name"
        value={values.first_name}
        onChange={e => handleInputChange(e)}
        margin="normal"
      />
      <br />
      <TextField
        name="last_name"
        label="Last Name"
        value={values.last_name}
        onChange={e => handleInputChange(e)}
        margin="normal"
      />
      <br />
      <TextField
        name="email"
        label="Email"
        value={values.email}
        onChange={e => handleInputChange(e)}
        margin="normal"
      />
      <br />
      <TextField
        name="phone"
        label="Phone"
        value={values.phone}
        onChange={e => handleInputChange(e)}
        margin="normal"
      />
      <br />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </form>
  );
};

export default Form;
