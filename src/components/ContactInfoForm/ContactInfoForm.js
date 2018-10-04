import React, { Component } from "react";
import Form from "./Form";

class ContactInfoForm extends Component {
  constructor(props) {
    super(props);
    const newContact = {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      avatar: "21.jpg"
    };
    this.state = this.props.existingContact || newContact;
  }

  handleSave = () => {
    this.props.handleSave(this.state);
  };

  handleInputChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Form
        handleInputChange={this.handleInputChange}
        handleSave={this.handleInputChange}
        values={this.state}
        title={this.props.title}
      />
    );
  }
}

export default ContactInfoForm;
