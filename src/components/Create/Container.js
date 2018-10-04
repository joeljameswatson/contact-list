import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import ContactInfoForm from "components/ContactInfoForm";

class Container extends Component {
  handleCreateContact = data => this.props.createContact(data);

  render() {
    return <ContactInfoForm handleSave={this.handleCreateContact} />;
  }
}

export default connect(
  null,
  actions
)(Container);
