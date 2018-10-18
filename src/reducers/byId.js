import { Map } from "immutable";

const byId = (state = Map({}), action) => {
  switch (action.type) {
    case "FETCH_CONTACTS_SUCCESS":
      return state.merge(action.response.entities.contacts);
    case "FETCH_CONTACT_DETAIL_SUCCESS":
    case "CREATE_CONTACT_SUCCESS":
    case "UPDATE_CONTACT_SUCCESS":
      const merged = state.merge(action.response.entities.contacts);
      return merged.setIn([action.response.result, "isDetailFetched"], true);
    case "DELETE_CONTACT_SUCCESS":
      return state.delete(action.id);
    default:
      return state;
  }
};

export const getIsDetailFetched = (state, id) =>
  state.getIn([id, "isDetailFetched"]);
export const getContact = (state, id) => state.get(id);

export default byId;
