import { combineReducers } from "redux-immutable";
import byId, * as fromById from "./byId";
import list, * as fromList from "./list";

const contacts = combineReducers({
  byId,
  list
});

export const getContactList = state => {
  const contactIds = fromList.getIds(state.get("list"));
  return contactIds.map(id => fromById.getContact(state.get("byId"), id));
};

export const getContactDetail = (state, id) => {
  return fromById.getContact(state.get("byId"), id);
};

export const getIsFetching = state => {
  return fromList.getIsFetching(state.get("list"));
};

export const getErrorMessage = state => {
  return fromList.getErrorMessage(state.get("list"));
};

export const getIsListFetched = state => {
  return fromList.getIsListFetched(state.get("list"));
};

export const getIsDetailFetched = (state, id) => {
  return fromList.getIsDetailFetched(state.get("list"), id);
};

export default contacts;
