import * as fakeApi from "fakeApi";
import * as schema from "./schema";
import { normalize } from "normalizr";
import { fromJS } from "immutable";

export const fetchContacts = async () => {
  const contacts = await fakeApi.fetchContacts();
  return fromJS(normalize(contacts, schema.arrayOfContacts));
};

export const fetchContactDetail = async id => {
  const contactDetail = await fakeApi.fetchContactDetail(id);
  return fromJS(normalize(contactDetail, schema.contact));
};

export const createContact = async data => {
  const contactDetail = await fakeApi.createContact(data);
  return fromJS(normalize(contactDetail, schema.contact));
};

export const deleteContact = async id => {
  return fakeApi.deleteContact(id);
};

export const updateContact = async id => {
  const contactDetail = await fakeApi.updateContact(id);
  return fromJS(normalize(contactDetail, schema.contact));
};
