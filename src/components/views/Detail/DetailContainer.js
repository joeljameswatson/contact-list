import { fetchContactDetail, deleteContact } from "actions";

import React, { useEffect } from "react";
import {
  getContactDetail,
  getErrorMessage,
  getIsDetailFetching
} from "reducers";

import ApiError from "components/shared/ApiError";
import Contact from "./Contact";
import { connect } from "react-redux";

export function DetailContainer({
  match: {
    params: { id }
  },
  contact,
  deleteContact,
  history,
  errorMessage,
  fetchContactDetail,
  isFetching
}) {
  useEffect(() => {
    fetchContactDetail(id);
  }, [fetchContactDetail, id]);

  const contactAsJS = contact && contact.toJS();

  function handleRequestDelete() {
    deleteContact(id).then(() => history.push("/contacts"));
  }

  if (errorMessage) {
    return (
      <ApiError
        message={errorMessage}
        handleRetry={() => fetchContactDetail(id)}
      />
    );
  }

  return (
    <Contact
      contact={contactAsJS}
      handleRequestDelete={handleRequestDelete}
      loading={isFetching}
      id={id}
    />
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    contact: getContactDetail(state, ownProps.match.params.id),
    isFetching: getIsDetailFetching(state),
    errorMessage: getErrorMessage(state)
  };
};

export default connect(
  mapStateToProps,
  { fetchContactDetail, deleteContact }
)(DetailContainer);
