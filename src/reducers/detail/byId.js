import { Map } from "immutable";

const byId = (state = Map(), action) => {
  switch (action.type) {
    case "FETCH_CONTACT_DETAIL_SUCCESS":
    case "CREATE_CONTACT_SUCCESS":
    case "UPDATE_CONTACT_SUCCESS":
      return state.mergeDeep(action.response.getIn(["entities", "contacts"]));
    case "DELETE_CONTACT_SUCCESS":
      return state.delete(action.id);
    default:
      return state;
  }
};

export default byId;
