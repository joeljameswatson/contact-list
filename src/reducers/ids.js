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
    default:
      return state;
  }
};

export const getIds = state => state;

export default ids;
