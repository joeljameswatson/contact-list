import byId from "./byId";
import { combineReducers } from "redux-immutable";
import errorMessage from "./errorMessage";
import fetchedDetailIDs from "./fetchedDetailIDs";
import ids from "./ids";
import isFetching from "./isFetching";
import isListFetched from "./isListFetched";

const list = combineReducers({
  byId,
  ids,
  isFetching,
  isListFetched,
  errorMessage,
  fetchedDetailIDs
});

export const getContactList = state => {
  return state.get("ids").map(id => state.get("byId").get(id));
};

export const getContactDetail = (state, id) => {
  return state.get("byId").get(id);
};

export const getIsFetching = state => {
  return state.get("isFetching");
};

export const getErrorMessage = state => {
  return state.get("errorMessage");
};

export const getIsListFetched = state => {
  return state.get("isListFetched");
};

export const getIsDetailFetched = (state, id) => {
  return state.get("fetchedDetailIDs").includes(id);
};

export default list;
