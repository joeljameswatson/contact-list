import merge from "lodash/merge";

const byId = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_CONTACTS_SUCCESS":
      return merge({}, state, action.response.entities.contacts);
    case "FETCH_CONTACT_DETAIL_SUCCESS":
    case "CREATE_CONTACT_SUCCESS":
    case "UPDATE_CONTACT_SUCCESS":
      let merged = merge({}, state, action.response.entities.contacts);
      merged[action.response.result].isDetailFetched = true;
      return merged;
    case "DELETE_CONTACT_SUCCESS":
      const copy = { ...state };
      delete copy[action.id];
      return copy;
    default:
      return state;
  }
};

export const getIsDetailFetched = (state, id) =>
  state[id] && state[id].isDetailFetched;
export const getContact = (state, id) => state[id];

export default byId;
