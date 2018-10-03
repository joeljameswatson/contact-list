import React from "react";
// import Contact from "./Contact";

const List = ({ contacts }) => {
  console.log(contacts);
  return (
    <div>
      {contacts.map(contact => (
        <div key={contact.id}>{contact.first_name}</div>
      ))}
    </div>
  );
};

export default List;
