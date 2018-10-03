const byId = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.contacts
    };
  }
  return state;
};

export const getContact = (state, id) => state[id];

export default byId;
