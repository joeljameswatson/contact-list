// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server
import { v4 } from "node-uuid";
import contacts from "./contacts";

const fakeDatabase = {
  contacts: contacts.map(contact => ({
    ...contact,
    id: contact.id.toString(),
    avatar_large: contact.avatar
  }))
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
  delay(5000).then(() => {
    const contact = fakeDatabase.contacts.find(contact => contact.id === id);
    if (!contact) throw new Error("cant find that one!");
    // const rand = Math.random();
    // console.log(rand);
    // if (rand > 0.5) {
    //   throw new Error("boom!");
    // }
    return contact;
  });

export const createContact = ({ first_name, last_name, email, phone }) =>
  delay(500).then(() => {
    const contact = {
      id: v4(),
      first_name,
      last_name,
      email,
      phone
    };
    fakeDatabase.contacts.push(contact);
    return contact;
  });

export const deleteContact = id =>
  delay(500).then(() => {
    fakeDatabase.contacts = fakeDatabase.contacts.filter(
      contact => contact.id !== id
    );
  });

export const updateContact = payload =>
  delay(500).then(() => {
    fakeDatabase.contacts.forEach(function(contact, index, arr) {
      if (contact.id === payload.id) {
        arr[index] = payload;
      }
    });
    return payload;
  });
