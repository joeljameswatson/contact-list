import { combineReducers } from "redux";
import byId, * as fromById from "./byId";
import list, * as fromList from "./list";

const contacts = combineReducers({
  byId,
  list
});

export const getContactList = state => {
  const contactIds = fromList.getIds(state.list);
  return contactIds.map(id => fromById.getContact(state.byId, id));
};

export const getContactDetail = (state, id) => {
  const contacts = getContactList(state);
  return contacts.find(contact => contact.id === id);
};

export const getIsFetching = state => {
  return fromList.getIsFetching(state.list);
};

export const getErrorMessage = state => {
  return fromList.getErrorMessage(state.list);
};

export const getIsListFetched = state => {
  return fromList.getIsListFetched(state.list);
};

export const getIsDetailFetched = (state, id) => {
  return fromById.getIsDetailFetched(state.byId, id);
};

export default contacts;
