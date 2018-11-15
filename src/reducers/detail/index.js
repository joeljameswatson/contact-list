import byId from "./byId";
import { combineReducers } from "redux-immutable";
import errorMessage from "./errorMessage";
import isFetching from "./isFetching";

const detail = combineReducers({
  byId,
  isFetching,
  errorMessage
});

export const getDetail = (state, id) => {
  return state.get("byId").get(id);
};

export const getIsFetching = state => {
  return state.get("isFetching");
};

export const getErrorMessage = state => {
  return state.get("errorMessage");
};

export const getIsDetailFetched = (state, id) => {
  return state.get("byId").get(id) ? true : false;
};

export default detail;
