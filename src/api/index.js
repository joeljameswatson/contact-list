// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server

import contacts from "./contacts";

const fakeDatabase = {
  contacts
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchContacts = filter =>
  delay(500).then(() => fakeDatabase.contacts);
