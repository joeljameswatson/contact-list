import { combineReducers } from "redux";
import byId, { getContact } from "./byId";
import ids, { getIds } from "./ids";

const contacts = combineReducers({
  byId,
  ids
});

export const getContactList = state => {
  const contactIds = getIds(state.ids);
  return contactIds.map(id => getContact(state.byId, id));
};

export const getContactDetail = (state, id) => {
  const contacts = getContactList(state);
  return contacts.find(contact => contact.id === id);
};

export default contacts;
