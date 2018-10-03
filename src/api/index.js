// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server

import contacts from "./contacts";

const fakeDatabase = {
  contacts: contacts.map(c => ({ ...c, id: c.id.toString() }))
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchContacts = () =>
  delay(500).then(() =>
    fakeDatabase.contacts.map(({ id, first_name, last_name, avatar }) => ({
      id,
      first_name,
      last_name,
      avatar
    }))
  );

export const fetchContactDetail = id =>
  delay(500).then(() => {
    return fakeDatabase.contacts.find(contact => contact.id.toString() === id);
  });
