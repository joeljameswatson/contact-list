import { List } from "immutable";

const fetchedDetailIDs = (state = List(), action) => {
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

export default fetchedDetailIDs;
