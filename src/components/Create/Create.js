import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      avatar: "21.jpg"
    };
  }
  // TODO: look at duplicate naming
  createContact = () => {
    this.props.createContact(this.state);
  };

  handleInputChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form noValidate autoComplete="off">
        <TextField
          name="first_name"
          label="First Name"
          value={this.state.first_name}
          onChange={e => this.handleInputChange(e)}
          margin="normal"
        />
        <br />
        <TextField
          name="last_name"
          label="Last Name"
          value={this.state.last_name}
          onChange={e => this.handleInputChange(e)}
          margin="normal"
        />
        <br />
        <TextField
          name="email"
          label="Email"
          value={this.state.email}
          onChange={e => this.handleInputChange(e)}
          margin="normal"
        />
        <br />
        <TextField
          name="phone"
          label="Phone"
          value={this.state.phone}
          onChange={e => this.handleInputChange(e)}
          margin="normal"
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={this.createContact}
        >
          Save
        </Button>
      </form>
    );
  }
}

export default Create;
