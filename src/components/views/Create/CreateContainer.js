import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import ContactInfoForm from "components/shared/ContactInfoForm";

function Container(props) {
  const [saved, setSaved] = useState(false);
  function handleCreateContact(data) {
    const { createContact, history } = props;
    createContact(data).then(() => setSaved(true));
    // createContact(data).then(() => history.push("/contacts"));
  }
  debugger;
  return (
    <ContactInfoForm
      handleSave={handleCreateContact}
      title={saved ? "Contact saved!" : "Create New Contact"}
      saved={saved}
    />
  );
}

export default connect(
  null,
  actions
)(Container);
