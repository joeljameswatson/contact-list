import { normalize } from "normalizr";
import * as api from "api";
import * as schema from "./schema";

export const fetchContacts = () => dispatch => {
  dispatch({ type: "FETCH_CONTACTS_REQUEST" });

  return api.fetchContacts().then(response => {
    dispatch({
      type: "FETCH_CONTACTS_SUCCESS",
      response: normalize(response, schema.arrayOfContacts)
    });
  });
};

export const fetchContactDetail = id => dispatch => {
  dispatch({
    type: "FETCH_CONTACT_DETAIL",
    id
  });

  return api.fetchContactDetail(id).then(response => {
    dispatch({
      type: "FETCH_CONTACT_DETAIL_SUCCESS",
      response: normalize(response, schema.contact)
    });
  });
};

export const createContact = data => dispatch => {
  dispatch({ type: "CREATE_CONTACT", payload: data });

  return api.createContact(data).then(response => {
    dispatch({
      type: "CREATE_CONTACT_SUCCESS",
      response: normalize(response, schema.contact)
    });
  });
};
