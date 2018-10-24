import { combineReducers } from "redux-immutable";
import { List } from "immutable";

const ids = (state = List(), action) => {
  switch (action.type) {
    case "FETCH_CONTACTS_SUCCESS":
      return action.response.get("result");
    case "FETCH_CONTACT_DETAIL_SUCCESS":
    case "CREATE_CONTACT_SUCCESS":
      if (state.has(action.response.get("result"))) {
        return state;
      }
      return state.push(action.response.get("result"));
    case "DELETE_CONTACT_SUCCESS":
      return state.filter(id => id !== action.id);
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case "FETCH_CONTACT_DETAIL_REQUEST":
    case "FETCH_CONTACTS_REQUEST":
      return true;
    case "FETCH_CONTACT_DETAIL_SUCCESS":
    case "FETCH_CONTACT_DETAIL_FAILURE":
    case "FETCH_CONTACTS_SUCCESS":
    case "FETCH_CONTACTS_FAILURE":
      return false;
    default:
      return state;
  }
};

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case "FETCH_CONTACT_DETAIL_FAILURE":
      return action.error.message;
    case "FETCH_CONTACT_DETAIL_REQUEST":
    case "FETCH_CONTACT_DETAIL_SUCCESS":
      return null;
    default:
      return state;
  }
};

export const isListFetched = (state = false, action) => {
  switch (action.type) {
    case "FETCH_CONTACTS_SUCCESS":
      return true;
    default:
      return state;
  }
};

export const fetchedDetailIDs = (state = List(), action) => {
  switch (action.type) {
    case "FETCH_CONTACT_DETAIL_SUCCESS":
    case "CREATE_CONTACT_SUCCESS":
      return state.push(action.id);
    case "DELETE_CONTACT_SUCCESS":
      return state.filter(id => id !== action.id);
    default:
      return state;
  }
};

const list = combineReducers({
  ids,
  isFetching,
  isListFetched,
  errorMessage,
  fetchedDetailIDs
});

export const getIds = state => state.get("ids");
export const getIsFetching = state => state.get("isFetching");
export const getErrorMessage = state => state.get("errorMessage");
export const getIsListFetched = state => state.get("isListFetched");
export const getIsDetailFetched = (state, id) =>
  state.get("fetchedDetailIDs").includes(id);

export default list;
