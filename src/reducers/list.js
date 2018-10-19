import { combineReducers } from "redux-immutable";
import { List } from "immutable";

const ids = (state = List(), action) => {
  switch (action.type) {
    case "FETCH_CONTACTS_SUCCESS":
      return List(action.response.result);
    case "FETCH_CONTACT_DETAIL_SUCCESS":
    case "CREATE_CONTACT_SUCCESS":
      if (state.has(action.response.result)) {
        return state;
      }
      return state.push(action.response.result);
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

const list = combineReducers({
  ids,
  isFetching,
  isListFetched,
  errorMessage
});

export const getIds = state => state.get("ids");
export const getIsFetching = state => state.get("isFetching");
export const getErrorMessage = state => state.get("errorMessage");
export const getIsListFetched = state => state.get("isListFetched");

export default list;
