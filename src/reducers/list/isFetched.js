const isFetched = (state = false, action) => {
  switch (action.type) {
    case "FETCH_CONTACTS_SUCCESS":
      return true;
    default:
      return state;
  }
};

export default isFetched;
