import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import ContactInfoForm from "components/shared/ContactInfoForm";
import { getContactDetail } from "reducers";

function EditContainer({
  match: {
    params: { id }
  },
  fetchContactDetail,
  contact,
  updateContact,
  history
}) {
  useEffect(() => {
    fetchContactDetail(id);
  }, [fetchContactDetail, id]);

  // prevents initializing state in ContactInfoForm with empty object when refreshing or updating url
  if (!contact) return null;

  const contactAsJS = contact && contact.toJS();

  function handleUpdateContact(data) {
    updateContact(data).then(() => history.push("/contacts"));
  }

  return (
    <ContactInfoForm
      handleSave={handleUpdateContact}
      existingContact={contactAsJS}
      title="Edit Contact Details"
    />
  );
}

const mapStateToProps = (state, ownProps) => {
  return { contact: getContactDetail(state, ownProps.match.params.id) };
};

export default connect(
  mapStateToProps,
  actions
)(EditContainer);
