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

export default ids;
