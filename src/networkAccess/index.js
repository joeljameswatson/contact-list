import * as fakeApi from "fakeApi";

export const fetchContacts = () => {
  return fakeApi.fetchContacts();
};

export const fetchContactDetail = id => {
  return fakeApi.fetchContactDetail(id);
};

export const createContact = data => {
  return fakeApi.createContact(data);
};

export const deleteContact = id => {
  return fakeApi.deleteContact(id);
};

export const updateContact = id => {
  return fakeApi.updateContact(id);
};
