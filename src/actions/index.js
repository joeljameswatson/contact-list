import { normalize } from "normalizr";
import * as api from "api";
import * as schema from "./schema";

export const fetchContacts = filter => dispatch => {
  dispatch({
    type: "FETCH_CONTACTS_REQUEST",
    filter
  });

  return api.fetchContacts(filter).then(response => {
    dispatch({
      type: "FETCH_CONTACTS_SUCCESS",
      filter,
      response: normalize(response, schema.arrayOfContacts)
    });
  });
};
