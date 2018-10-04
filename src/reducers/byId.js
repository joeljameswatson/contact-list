const byId = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_CONTACTS_SUCCESS":
    case "FETCH_CONTACT_DETAIL_SUCCESS":
    case "CREATE_CONTACT_SUCCESS":
    case "UPDATE_CONTACT_SUCCESS":
      return {
        ...state,
        ...action.response.entities.contacts
      };
    case "DELETE_CONTACT_SUCCESS":
      const copy = { ...state };
      delete copy[action.id];
      return copy;
    default:
      return state;
  }
};

export const getContact = (state, id) => state[id];

export default byId;
