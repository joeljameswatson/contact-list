import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import ContactInfoForm from "components/shared/ContactInfoForm";
import { getContactDetail } from "reducers";

class Container extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const id = this.props.match.params.id;
    this.props.fetchContactDetail(id);
  };

  handleUpdateContact = data => {
    const { updateContact, history } = this.props;
    updateContact(data).then(() => history.push("/contacts"));
  };

  render() {
    return (
      <ContactInfoForm
        handleSave={this.handleUpdateContact}
        existingContact={this.props.contact}
        title="Edit Contact Details"
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
