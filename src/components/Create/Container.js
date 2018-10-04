import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import ContactInfoForm from "components/ContactInfoForm";

class Container extends Component {
  handleCreateContact = data => {
    const { updateContact, history } = this.props;
    this.props.createContact(data).then(() => history.push("/contacts"));
  };

  render() {
    return (
      <ContactInfoForm
        handleSave={this.handleCreateContact}
        title="Create New Contact"
      />
    );
  }
}

export default connect(
  null,
  actions
)(Container);
