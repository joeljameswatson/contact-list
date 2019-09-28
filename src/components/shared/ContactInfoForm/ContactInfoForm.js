import React, { useState } from "react";
import Form from "./Form";

const newContact = {
  first_name: "",
  last_name: "",
  email: "",
  phone: ""
};

function ContactInfoForm({ title, existingContact, handleSave }) {
  const [contactData, setContactData] = useState(existingContact || newContact);
  function handleInputChange({ target: { value, name } }) {
    setContactData({ ...contactData, [name]: value });
  }
  function saveContact() {
    handleSave(contactData);
  }
  return (
    <Form
      handleInputChange={handleInputChange}
      handleSave={saveContact}
      values={contactData}
      title={title}
    />
  );
}

export default ContactInfoForm;
