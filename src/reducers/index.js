import { combineReducers } from "redux";
import byId, { getContact } from "./byId";
import list, * as fromList from "./list";

const contacts = combineReducers({
  byId,
  list
});

export const getContactList = state => {
  const contactIds = fromList.getIds(state.list);
  return contactIds.map(id => getContact(state.byId, id));
};

export const getContactDetail = (state, id) => {
  const contacts = getContactList(state);
  return contacts.find(contact => contact.id === id);
};

export const getIsFetching = (state, id) => {
  console.log(state);
  return fromList.getIsFetching(state.list);
};

export default contacts;
