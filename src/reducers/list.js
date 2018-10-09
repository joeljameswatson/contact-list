import { combineReducers } from "redux";

const ids = (state = [], action) => {
  switch (action.type) {
    case "FETCH_CONTACTS_SUCCESS":
      return action.response.result;
    case "FETCH_CONTACT_DETAIL_SUCCESS":
    case "CREATE_CONTACT_SUCCESS":
      if (state.some(id => id === action.response.result)) {
        return state;
      }
      return [...state, action.response.result];
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

const list = combineReducers({
  ids,
  isFetching,
  errorMessage
});

export const getIds = state => state.ids;
export const getIsFetching = state => state.isFetching;
export const getErrorMessage = state => state.errorMessage;

export default list;
