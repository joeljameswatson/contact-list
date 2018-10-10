import * as api from "api";
import { getIsDetailFetched, getIsListFetched } from "reducers";

export const fetchContacts = () => ({
  types: [
    "FETCH_CONTACTS_REQUEST",
    "FETCH_CONTACTS_SUCCESS",
    "FETCH_CONTACTS_FAILURE"
  ],
  callAPI: () => api.fetchContacts(),
  shouldCallAPI: state => !getIsListFetched(state)
});

export const fetchContactDetail = id => ({
  types: [
    "FETCH_CONTACT_DETAIL_REQUEST",
    "FETCH_CONTACT_DETAIL_SUCCESS",
    "FETCH_CONTACT_DETAIL_FAILURE"
  ],
  callAPI: () => api.fetchContactDetail(id),
  shouldCallAPI: state => !getIsDetailFetched(state, id),
  payload: { id }
});

export const createContact = data => ({
  types: [
    "CREATE_CONTACT_REQUEST",
    "CREATE_CONTACT_SUCCESS",
    "CREATE_CONTACT_FAILURE"
  ],
  callAPI: () => api.createContact(data)
});

export const deleteContact = id => ({
  types: [
    "DELETE_CONTACT_REQUEST",
    "DELETE_CONTACT_SUCCESS",
    "DELETE_CONTACT_FAILURE"
  ],
  callAPI: () => api.deleteContact(id),
  payload: { id }
});

export const updateContact = id => ({
  types: [
    "UPDATE_CONTACT_REQUEST",
    "UPDATE_CONTACT_SUCCESS",
    "UPDATE_CONTACT_FAILURE"
  ],
  callAPI: () => api.updateContact(id),
  payload: { id }
});
