import React, { Component, useEffect } from "react";
import { getContactList, getIsListFetching } from "reducers";
import { fetchContacts } from "actions";

import ContactList from "./List";
import Spinner from "components/shared/Spinner";
import { connect } from "react-redux";

function ListContainer({ fetchContacts, list, isFetching }) {
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const showSpinner = isFetching && list.size === 0;
  const listAsJS = list.toJS();
  return (
    <React.Fragment>
      <Spinner isVisible={showSpinner} />
      <ContactList contacts={listAsJS} />
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    list: getContactList(state),
    isFetching: getIsListFetching(state)
  };
};

export default connect(
  mapStateToProps,
  { fetchContacts }
)(ListContainer);
