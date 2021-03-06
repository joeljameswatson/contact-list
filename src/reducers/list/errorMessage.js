const errorMessage = (state = null, action) => {
  switch (action.type) {
    case "FETCH_CONTACTS_FAILURE":
      return action.error.message;
    case "FETCH_CONTACTS_REQUEST":
    case "FETCH_CONTACTS_SUCCESS":
      return null;
    default:
      return state;
  }
};

export default errorMessage;
