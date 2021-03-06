const isFetching = (state = false, action) => {
  switch (action.type) {
    case "FETCH_CONTACTS_REQUEST":
      return true;
    case "FETCH_CONTACTS_SUCCESS":
    case "FETCH_CONTACTS_FAILURE":
      return false;
    default:
      return state;
  }
};

export default isFetching;
