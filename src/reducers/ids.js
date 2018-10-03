const ids = (state = [], action) => {
  switch (action.type) {
    case "FETCH_CONTACTS_SUCCESS":
      return action.response.result;
    default:
      return state;
  }
};

export const getIds = state => state;

export default ids;
