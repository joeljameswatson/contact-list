import { combineReducers } from "redux";
import byId, { getContact } from "./byId";
import ids, { getIds } from "./ids";

const contacts = combineReducers({
  byId,
  ids
});

export const getContacts = state => {
  const contactIds = getIds(state.ids);
  return contactIds.map(id => getContact(state.byId, id));
};

export default contacts;
