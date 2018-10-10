import React, { Component } from "react";
import Form from "./Form";

class ContactInfoForm extends Component {
  constructor(props) {
    super(props);
    const newContact = {
      first_name: "",
      last_name: "",
      email: "",
      phone: ""
    };
    this.state = this.props.existingContact || newContact;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.existingContact !== this.props.existingContact) {
      this.setState(this.props.existingContact);
    }
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
        handleSave={this.handleSave}
        values={this.state}
        title={this.props.title}
      />
    );
  }
}

export default ContactInfoForm;
