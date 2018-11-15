const isFetching = (state = false, action) => {
  switch (action.type) {
    case "FETCH_CONTACT_DETAIL_REQUEST":
      return true;
    case "FETCH_CONTACT_DETAIL_SUCCESS":
    case "FETCH_CONTACT_DETAIL_FAILURE":
      return false;
    default:
      return state;
  }
};

export default isFetching;
