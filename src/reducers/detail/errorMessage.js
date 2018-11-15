const errorMessage = (state = null, action) => {
  switch (action.type) {
    case "FETCH_CONTACT_DETAIL_FAILURE":
      return action.error.message;
    case "FETCH_CONTACT_DETAIL_REQUEST":
    case "FETCH_CONTACT_DETAIL_SUCCESS":
      return null;
    default:
      return state;
  }
};

export default errorMessage;