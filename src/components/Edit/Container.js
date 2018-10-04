import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import ContactInfoForm from "components/ContactInfoForm";
import { getContactDetail } from "reducers";

class Container extends Component {
  handleUpdateContact = data => this.props.updateContact(data);

  render() {
    return (
      <ContactInfoForm
        handleSave={this.handleUpdateContact}
        existingContact={this.props.contact}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { contact: getContactDetail(state, ownProps.match.params.id) };
};

export default connect(
  mapStateToProps,
  actions
)(Container);
