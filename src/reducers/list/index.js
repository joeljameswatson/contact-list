import byId from "./byId";
import { combineReducers } from "redux-immutable";
import errorMessage from "./errorMessage";
import ids from "./ids";
import isFetched from "./isFetched";
import isFetching from "./isFetching";

const list = combineReducers({
  byId,
  ids,
  isFetching,
  isFetched,
  errorMessage
});

export const getList = state => {
  return state.get("ids").map(id => state.get("byId").get(id));
};

export const getIsFetching = state => {
  return state.get("isFetching");
};

export const getErrorMessage = state => {
  return state.get("errorMessage");
};

export const getIsFetched = state => {
  return state.get("isFetched");
};

export default list;
